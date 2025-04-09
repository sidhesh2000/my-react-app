import { useState, useEffect, useMemo } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadPdf from "../../assets/UploadPdf.gif";
import EditIcon from "../../assets/EditIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import SaveICon from "../../assets/SaveIcon.png";
import { db, doc, getDoc, setDoc } from '../../firebase';
import { ROOT_URL } from "../RootUrl/rooturl";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader({ section, func }) {
  const [pdfDocuments, setPdfDocuments] = useState([]);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedHtml, setEditedHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterDocumentId, setFilterDocumentId] = useState(null);
  
  const mainDocRef = useMemo(() => 
    doc(db, 'pdfDocuments', section), 
    [section]
  );

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${ROOT_URL}/api/documents/${section}`);
        const data = await response.json();
        const mappedData = data.map(doc => ({
          id: doc.id,
          fileName: doc.file_name,
          htmlData: doc.html_data,
          createdAt: doc.created_at,
          lastUpdated: doc.last_updated,
          section: doc.section
        }));
        setPdfDocuments(mappedData);
      } catch (err) {
        setError("Failed to load documents");
      }
    };
    fetchDocuments();
  }, [section]);
  
  const saveAllDocuments = async (documents) => {
    setIsLoading(true);
    try {
      await setDoc(mainDocRef, { documents });
      setPdfDocuments(documents);
    } catch (err) {
      console.error("Error saving documents:", err);
      setError("Failed to save documents.");
    } finally {
      setIsLoading(false);
    }
  };

  const extractText = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const pdf = await pdfjsLib.getDocument({ data: reader.result }).promise;
          let extractedHtml = "";
          let prevItem = null;

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();

            content.items.forEach((item) => {
              const text = item.str;
              if (!text.trim()) return;

              const isHeading = text === text.toUpperCase();

              if (isHeading) {
                if (prevItem) extractedHtml += "<br/><br/>";
                extractedHtml += `<strong style="color: #407bff; font-family: 'Inter', sans-serif;">${text}</strong><br/>`;
              } else {
                extractedHtml += `<span style="font-family: 'Inter', font-size: large;">${text}</span> `;
              }

              prevItem = item;
            });
          }

          resolve({
            id: Date.now().toString(),
            fileName: file.name,
            htmlData: extractedHtml || "No text found in this PDF.",
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            section: section
          });
        } catch (err) {
          console.error("PDF processing error:", err);
          resolve({
            id: Date.now().toString(),
            fileName: file.name,
            htmlData: "Could not extract text (may be scanned PDF)",
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            section: section
          });
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    
    for (const file of files) {
      formData.append('pdfs', file);
    }
  
    try {
      const response = await fetch(`${ROOT_URL}/api/upload/${section}`, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const updated = await fetch(`${ROOT_URL}/api/documents/${section}`);
        const data = await updated.json();
        const mappedData = data.map(doc => ({
          id: doc.id,
          fileName: doc.file_name,
          htmlData: doc.html_data,
          createdAt: doc.created_at,
          lastUpdated: doc.last_updated,
          section: doc.section
        }));
        setPdfDocuments(mappedData);
      }
    } catch (err) {
      setError("Upload failed");
    }
  };

 // For delete operation
const handleDelete = async (id) => {
  if (window.confirm("Delete this document?")) {
    await fetch(`${ROOT_URL}/api/document/${id}`, { // Note singular endpoint
      method: 'DELETE' 
    });
    setPdfDocuments(pdfDocuments.filter(doc => doc.id !== id));
  }
};

  const handleSaveEdit = async () => {
    await fetch(`${ROOT_URL}/api/document/${isEditing}`, { // Note endpoint consistency
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ htmlData: editedHtml })
    });
    
    const updated = await fetch(`${ROOT_URL}/api/documents/${section}`);
    const data = await updated.json();
    // Re-map the data after update
    const mappedData = data.map(doc => ({
      id: doc.id,
      fileName: doc.file_name,
      htmlData: doc.html_data,
      createdAt: doc.created_at,
      lastUpdated: doc.last_updated,
      section: doc.section
    }));
    setPdfDocuments(mappedData);
    setIsEditing(null);
  };

  
  const handleEdit = (docId) => {
    const document = pdfDocuments.find(doc => doc.id === docId);
    if (document) {
      setIsEditing(docId);
      setEditedHtml(document.htmlData);
      setFilterDocumentId(docId); // Filter to show only this document when editing
    }
  };


  const handleCancelEdit = () => {
    setIsEditing(null);
    setFilterDocumentId(null); // Clear filter when canceling edit
  };

  // Filter documents based on selection (or show all if no filter)
  const filteredDocuments = filterDocumentId 
    ? pdfDocuments.filter(doc => doc.id === filterDocumentId)
    : pdfDocuments;

  // Combine all HTML content for display when not editing
  const combinedHtml = filteredDocuments
    .map(doc => `${doc.htmlData}`)
    .join('<hr style="margin: 20px 0; border-color: #eee;"/>');

  useEffect(() => {
    func(combinedHtml);
  }, [combinedHtml]);
console.log(filteredDocuments,"alldocs");

  return (
    <div className="mt-5" style={{ fontFamily: "Inter", fontSize: "12px" }}>
      <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
        <button 
          className="btn btn-primary" 
          onClick={() => document.getElementById(`pdfInput-${section}`).click()}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : `Upload PDF(s) for ${section}`}
        </button>
        
        {pdfDocuments.length > 0 && (
          <div style={{display:"flex",gap:"1rem"}}>
            <select
              className="form-select"
              value={filterDocumentId || ""}
              onChange={(e) => setFilterDocumentId(e.target.value || null)}
              disabled={isLoading}
              style={{ width: "200px" }}
            >
              <option value="">All Documents</option>
              {pdfDocuments.map(doc => (
                <option key={doc.id} value={doc.id}>
                  {doc.fileName}
                </option>
              ))}
            </select>
            
            {filterDocumentId && !isEditing && (
              <div style={{alignItems:"center"}} className="d-flex justify-content-center gap-3">
                <div onClick={() => handleEdit(filterDocumentId)} style={{cursor:"pointer"}}>
                  <img src={EditIcon} height="20" alt="Edit"/>
                </div>
                <div onClick={() => handleDelete(filterDocumentId)} style={{cursor:"pointer"}}>
                  <img src={DeleteIcon} height="20" alt="Delete"/>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <input
        type="file"
        id={`pdfInput-${section}`}
        accept="application/pdf"
        className="form-control d-none"
        onChange={handleFileUpload}
        multiple
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {pdfDocuments.length > 0 && !isLoading && (
        <div className="mt-3">
          {isEditing ? (
            <div>
              <textarea
                className="form-control mb-2"
                rows="5"
                value={editedHtml}
                onChange={(e) => setEditedHtml(e.target.value)}
              />
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  {/* <img src={SaveICon} height="20" alt="Save" className="me-2"/> */}
                  Save
                </button>
                <button className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
           ""
          )}
        </div>
      )}

      {/* {!pdfDocuments.length && !isLoading && (
        <div className="text-center">
          <img src={UploadPdf} alt="Upload PDF" style={{ maxWidth: "300px" }} />
          <p className="mt-2">Upload PDF files to get started with {section}</p>
        </div>
      )} */}
    </div>
  );
}

export default PdfUploader;