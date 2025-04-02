import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadPdf from "../../assets/UploadPdf.gif";
import EditIcon from "../../assets/EditIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import SaveICon from "../../assets/SaveIcon.png";
import { db, doc, getDoc, setDoc, updateDoc, deleteDoc } from '../../firebase';

// Set the worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader(props) {
  const [pdfDocuments, setPdfDocuments] = useState([]);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedHtml, setEditedHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeDocumentId, setActiveDocumentId] = useState(null);

  // Main document reference
  const mainDocRef = doc(db, 'pdfDocuments', 'mainCollection');

  // Fetch all documents on mount
  useEffect(() => {
    const fetchDocuments = async () => {
      setIsLoading(true);
      try {
        const docSnap = await getDoc(mainDocRef);
        if (docSnap.exists() && docSnap.data().documents) {
          setPdfDocuments(docSnap.data().documents);
          if (docSnap.data().documents.length > 0) {
            setActiveDocumentId(docSnap.data().documents[0].id);
          }
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Failed to load PDF documents.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Save all documents
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

  // Extract text from PDF
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
              let text = item.str;
              if (!text.trim()) return;

              const isHeading = text === text.toUpperCase();

              if (isHeading) {
                if (prevItem) {
                  extractedHtml += "<br/><br/>";
                }
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
            lastUpdated: new Date().toISOString()
          });
        } catch (err) {
          console.error("PDF processing error:", err);
          resolve({
            id: Date.now().toString(),
            fileName: file.name,
            htmlData: "Could not extract text (may be scanned PDF)",
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString()
          });
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsLoading(true);
    setError("");
    e.target.value = "";

    Promise.all(files.map(extractText))
      .then(newDocs => {
        const updatedDocs = [...pdfDocuments, ...newDocs];
        return saveAllDocuments(updatedDocs).then(() => {
          if (pdfDocuments.length === 0 && newDocs.length > 0) {
            setActiveDocumentId(newDocs[0].id);
          }
        });
      })
      .catch(err => {
        console.error("Upload error:", err);
        setError("Failed to process PDF files");
      })
      .finally(() => setIsLoading(false));
  };

  // Delete document
  const handleDelete = (docId) => {
    if (window.confirm("Are you sure you want to delete this PDF document?")) {
      const updatedDocs = pdfDocuments.filter(doc => doc.id !== docId);
      saveAllDocuments(updatedDocs).then(() => {
        if (activeDocumentId === docId) {
          setActiveDocumentId(updatedDocs.length > 0 ? updatedDocs[0].id : null);
        }
      });
    }
  };

  // Edit document
  const handleEdit = (docId) => {
    const document = pdfDocuments.find(doc => doc.id === docId);
    if (document) {
      setIsEditing(docId);
      setEditedHtml(document.htmlData);
    }
  };

  // Save edit
  const handleSaveEdit = () => {
    const updatedDocs = pdfDocuments.map(doc => 
      doc.id === isEditing 
        ? { ...doc, htmlData: editedHtml, lastUpdated: new Date().toISOString() } 
        : doc
    );
    saveAllDocuments(updatedDocs).then(() => {
      setIsEditing(null);
    });
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setIsEditing(null);
  };

  // Set active document
  const handleDocumentSelect = (docId) => {
    setActiveDocumentId(docId);
    setIsEditing(null);
  };

  // Pass content to parent
  useEffect(() => {
    if (activeDocumentId) {
      const activeDoc = pdfDocuments.find(doc => doc.id === activeDocumentId);
      if (activeDoc) {
        props.func(activeDoc.htmlData);
      }
    } else {
      props.func("");
    }
  }, [activeDocumentId, pdfDocuments]);

  return (
    <div className="container mt-5" style={{ fontFamily: "Inter", fontSize: "large" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button 
          className="btn btn-primary" 
          onClick={() => document.getElementById("pdfInput").click()}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Upload PDF(s)"}
        </button>
        
        {pdfDocuments.length > 0 && (
          <div style={{display:"flex",gap:"1rem"}}>
            <select
              className="form-select"
              value={activeDocumentId || ""}
              onChange={(e) => handleDocumentSelect(e.target.value)}
              disabled={isLoading}
              style={{ width: "200px" }}
            >
              {pdfDocuments.map(doc => (
                <option key={doc.id} value={doc.id}>
                  {doc.fileName}
                </option>
              ))}
            </select>
            
            {activeDocumentId && !isEditing && (
              <div style={{alignItems:"center"}} className="d-flex justify-content-center gap-3">
                <div onClick={() => handleEdit(activeDocumentId)} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
                  <img src={EditIcon} height="20" alt="Edit"/>
                </div>
                <div onClick={() => handleDelete(activeDocumentId)} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
                  <img src={DeleteIcon} height="20" alt="Delete"/>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <input
        type="file"
        id="pdfInput"
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

      {activeDocumentId && !isLoading && (
        <div className="mt-3">
          {isEditing === activeDocumentId ? (
            <div>
              <textarea
                className="form-control mb-2"
                rows="10"
                style={{ height: "10rem" }}
                value={editedHtml}
                onChange={(e) => setEditedHtml(e.target.value)}
              />
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  Save Changes
                </button>
                <button className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // <div 
            //   dangerouslySetInnerHTML={{
            //     __html: pdfDocuments.find(doc => doc.id === activeDocumentId).htmlData
            //   }}
            // />
            ""
          )}
        </div>
      )}

      {/* {!pdfDocuments.length && !isLoading && (
        <div className="text-center">
          <img src={UploadPdf} alt="Upload PDF" style={{ maxWidth: "300px" }} />
          <p className="mt-2">Upload PDF files to get started</p>
        </div>
      )} */}
    </div>
  );
}

export default PdfUploader;