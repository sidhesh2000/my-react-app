import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadPdf from "../../assets/UploadPdf.gif";
import EditIcon from "../../assets/EditIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import SaveICon from "../../assets/SaveIcon.png";
import { db, doc, getDoc, setDoc, updateDoc } from '../../firebase';

// Set the worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader(props) {
  const [pdfHtml, setPdfHtml] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedHtml, setEditedHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [showActions, setShowActions] = useState(false); // New state for showing actions

  // Document reference for Firebase
  const docRef = doc(db, 'pdfData', 'currentPdf');

  // Fetch PDF data from Firestore on component mount
  useEffect(() => {
    const fetchPdfData = async () => {
      setIsLoading(true);
      try {
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists() && docSnap.data().htmlData) {
          setPdfHtml(docSnap.data().htmlData);
          setEditedHtml(docSnap.data().htmlData);
          setFileName(docSnap.data().fileName || "");
        }
      } catch (err) {
        console.error("Error fetching document:", err);
        setError("Failed to load PDF data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPdfData();
  }, []);

  // Save or update PDF data in Firestore
  const savePdfData = async (htmlData, name = "") => {
    setIsLoading(true);
    try {
      await setDoc(docRef, {
        htmlData,
        fileName: name || fileName,
        lastUpdated: new Date().toISOString()
      });
      setPdfHtml(htmlData);
      setEditedHtml(htmlData);
    } catch (err) {
      console.error("Error saving data:", err);
      setError("Failed to save data.");
    } finally {
      setIsLoading(false);
    }
  };

  const extractText = async (file) => {
    if (!file) return;

    setIsLoading(true);
    setPdfHtml("");
    setEditedHtml("");
    setError("");
    setFileName(file.name);

    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

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

          const finalHtml = extractedHtml || "No text found in this PDF.";
          await savePdfData(finalHtml, file.name);
        } catch (err) {
          console.error("PDF.js error:", err);
          setError("Failed to extract text from the PDF. It might be a scanned document.");
        } finally {
          setIsLoading(false);
        }
      };

      reader.onerror = () => {
        setError("Error reading the file.");
        setIsLoading(false);
      };
    } catch (err) {
      console.error("File processing error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleFileUpload = () => {
    document.getElementById("pdfInput").value = ""; // Reset input field
    document.getElementById("pdfInput").click();
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this PDF content?")) {
      setIsLoading(true);
      try {
        await setDoc(docRef, {
          htmlData: "",
          fileName: "",
          lastUpdated: new Date().toISOString()
        });
        setPdfHtml("");
        setEditedHtml("");
        setFileName("");
        setShowActions(false); // Hide actions after deletion
      } catch (err) {
        console.error("Error clearing document:", err);
        setError("Failed to delete data.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    await savePdfData(editedHtml);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedHtml(pdfHtml);
    setIsEditing(false);
  };

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  props.func(pdfHtml);

  return (
    <div className="container mt-5" style={{ fontFamily: "Inter", fontSize: "large" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button 
          className="btn btn-primary " 
          onClick={handleFileUpload}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Upload PDF"}
        </button>
        
        {pdfHtml && !isLoading && (<div style={{display:"flex",gap:"1rem"}}>
          <button 
            className={`btn  ${showActions ? "btn-secondary" : "btn-outline-primary"}`}
            onClick={toggleActions}
          >
            {showActions ? "Hide Actions" : "Enable Actions"}
          </button>
          {!isEditing && showActions?
           <div style={{alignItems:"center"}} className="d-flex justify-content-center gap-3 ">
           <div onClick={handleEdit} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
           <img src={EditIcon} height="20"/>
           </div>
           <div onClick={handleDelete} style={{cursor:"pointer",display:"flex",alignItems:"center"}}>
           <img src={DeleteIcon} height="20"/>
           </div></div> :"" }
           {pdfHtml && !isLoading && (
  <div >
    {isEditing ? (
      <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-success" onClick={handleSaveEdit}>
        Save Changes
      </button>
      <button className="btn btn-secondary" onClick={handleCancelEdit}>
        Cancel
      </button>
    </div>
    ) : (
   "" 
    )}
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
        onChange={(e) => e.target.files.length && extractText(e.target.files[0])}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {pdfHtml && !isLoading && (
        <div className="mt-3">
          {isEditing ? (
            <div>
              <textarea
                className="form-control mb-2"
                rows="10"
                style={{ height: "10rem" }}
                value={editedHtml}
                onChange={(e) => setEditedHtml(e.target.value)}
              />
           
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      {!pdfHtml && !isLoading && (
        <div className="text-center">
          <img src={UploadPdf} alt="Upload PDF" style={{ maxWidth: "300px" }} />
          <p className="mt-2">Upload a PDF file to get started</p>
        </div>
      )}
    </div>
  );
}

export default PdfUploader;