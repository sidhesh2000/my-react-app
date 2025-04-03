import { useState, useEffect, useMemo } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadPdf from "../../assets/UploadPdf.gif";
import EditIcon from "../../assets/EditIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import SaveICon from "../../assets/SaveIcon.png";
import { db, doc, getDoc, setDoc } from '../../firebase';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader({ section, func }) {
  const [pdfDocuments, setPdfDocuments] = useState([]);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedHtml, setEditedHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterDocumentId, setFilterDocumentId] = useState(null); // For edit/delete filtering

  const mainDocRef = useMemo(() => 
    doc(db, 'pdfDocuments', section), 
    [section]
  );

  useEffect(() => {
    const fetchDocuments = async () => {
      setIsLoading(true);
      try {
        const docSnap = await getDoc(mainDocRef);
        if (docSnap.exists() && docSnap.data().documents) {
          setPdfDocuments(docSnap.data().documents);
        } else {
          setPdfDocuments([]);
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Failed to load PDF documents.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, [mainDocRef]);

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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsLoading(true);
    setError("");
    e.target.value = "";

    Promise.all(files.map(extractText))
      .then(newDocs => {
        const updatedDocs = [...pdfDocuments, ...newDocs];
        return saveAllDocuments(updatedDocs);
      })
      .catch(err => {
        console.error("Upload error:", err);
        setError("Failed to process PDF files");
      })
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (docId) => {
    if (window.confirm("Are you sure you want to delete this PDF document?")) {
      const updatedDocs = pdfDocuments.filter(doc => doc.id !== docId);
      saveAllDocuments(updatedDocs).then(() => {
        if (filterDocumentId === docId) {
          setFilterDocumentId(null);
        }
      });
    }
  };

  const handleEdit = (docId) => {
    const document = pdfDocuments.find(doc => doc.id === docId);
    if (document) {
      setIsEditing(docId);
      setEditedHtml(document.htmlData);
      setFilterDocumentId(docId); // Filter to show only this document when editing
    }
  };

  const handleSaveEdit = () => {
    const updatedDocs = pdfDocuments.map(doc => 
      doc.id === isEditing 
        ? { ...doc, htmlData: editedHtml, lastUpdated: new Date().toISOString() } 
        : doc
    );
    saveAllDocuments(updatedDocs).then(() => {
      setIsEditing(null);
      setFilterDocumentId(null); // Clear filter after saving
    });
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
                rows="10"
                value={editedHtml}
                onChange={(e) => setEditedHtml(e.target.value)}
              />
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  <img src={SaveICon} height="20" alt="Save" className="me-2"/>
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