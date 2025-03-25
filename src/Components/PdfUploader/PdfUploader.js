import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";

// Set the worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader(props) {
  const [pdfHtml, setPdfHtml] = useState(localStorage.getItem("pdfData") || "");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedHtml, setEditedHtml] = useState("");
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    if (pdfHtml) {
      localStorage.setItem("pdfData", pdfHtml);
    }
  }, [pdfHtml]);

  const extractText = async (file) => {
    if (!file) return;

    setPdfHtml("");
    setEditedHtml("");
    setError("");

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

          const finalHtml = `
            <div style="width: 100%; text-align: justify; font-family: 'Inter'; font-size: large;">
              ${extractedHtml}
            </div>` || "No text found in this PDF.";

          setPdfHtml(finalHtml);
          setEditedHtml(finalHtml);
        } catch (err) {
          console.error("PDF.js error:", err);
          setError("Failed to extract text from the PDF. It might be a scanned document.");
        }
      };

      reader.onerror = () => {
        setError("Error reading the file.");
      };
    } catch (err) {
      console.error("File processing error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleFileUpload = () => {
    document.getElementById("pdfInput").value = ""; // Reset input field
    document.getElementById("pdfInput").click();
  };

  const handleDelete = () => {
    setPdfHtml("");
    setEditedHtml("");
    localStorage.removeItem("pdfData");
    setShowActions(false);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    setPdfHtml(editedHtml);
    setIsEditing(false);
    localStorage.setItem("pdfData", editedHtml);
  };

  const handleFinalSave = () => {
    setShowActions(false);
    setIsEditing(false);
  };
  props.func(pdfHtml)
  return (
    <div className="container mt-5" style={{ fontFamily: "Inter", fontSize: "large" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button className="btn btn-primary mb-3" onClick={handleFileUpload}>Upload PDF</button>
        <button className="btn btn-secondary mb-3" onClick={() => setShowActions(true)}>Enable Actions</button>
      </div>

      <input
        type="file"
        id="pdfInput"
        accept="application/pdf"
        className="form-control d-none"
        onChange={(e) => e.target.files.length && extractText(e.target.files[0])}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {pdfHtml && (
        <div>
          {isEditing ? (
            <textarea
              className="form-control"
              rows="10"
              value={editedHtml}
              onChange={(e) => setEditedHtml(e.target.value)}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: pdfHtml }} />
          )}

          {showActions && (
            <div className="mt-3">
              {isEditing ? (
                <button className="btn btn-success me-2" onClick={handleSaveEdit}>Save</button>
              ) : (
                <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
              )}
              <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
              <button className="btn btn-success" onClick={handleFinalSave}>Final Save</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PdfUploader;
