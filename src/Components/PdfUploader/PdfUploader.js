import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";

// Set the worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader(props) {
  const [pdfHtml, setPdfHtml] = useState(""); // Store formatted HTML output
  const [error, setError] = useState("");
  const [showUpload, setShowUpload] = useState(true); // Toggle upload button visibility

  const extractText = async (file) => {
    if (!file) return;

    setPdfHtml(""); // Reset previous output
    setError(""); // Reset errors

    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = async () => {
        try {
          const pdf = await pdfjsLib.getDocument({ data: reader.result }).promise;
          let extractedHtml = "";
          let prevItem = null;

          // Loop through all pages
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();

            content.items.forEach((item) => {
              let text = item.str;
              if (!text.trim()) return; // Skip empty text
              
              // Check if current item is a heading (all uppercase)
              const isHeading = text === text.toUpperCase(); // Check if text is all uppercase

              if (isHeading) {
                // Add line breaks before headings
                if (prevItem) {
                  extractedHtml += "<br/><br/>"; 
                }
                // Apply blue color only if the text is all caps and add a break tag after heading
                extractedHtml += `<strong style="color: #407bff; font-family: 'Inter', sans-serif;">${text}</strong><br/>`;
              } else {
                extractedHtml += `<span style="font-family: 'Inter', font-size: large;">${text}</span> `;
              }

              prevItem = item; // Update previous item for font size comparison
            });
          }

          // Set the final HTML for the component
          setPdfHtml(`
            <div style="
              width: 100%; 
              text-align: justify; 
              font-family: 'Inter';
              font-size: large;
            ">
              ${extractedHtml}
            </div>` || "No text found in this PDF.");
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

  props?.func(pdfHtml);

  const handleFileUpload = () => {
    document.getElementById("pdfInput").click(); // Trigger file input click
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "Inter", fontSize: "large" }}>
      
      {/* Toggle Switch to show/hide upload button */}
      

      {/* Upload Button */}
      {showUpload && (
        <div style={{display:"flex",justifyContent:"center"}}>

<button className="btn btn-primary mb-3" onClick={handleFileUpload}>
          Upload PDF
        </button>
        </div>
        
      )}

      {/* Hidden File Input */}
      <input
        type="file"
        id="pdfInput"
        accept="application/pdf"
        className="form-control d-none"
        onChange={(e) => e.target.files.length && extractText(e.target.files[0])}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Render the extracted HTML */}
    </div>
  );
}

export default PdfUploader;
