import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "bootstrap/dist/css/bootstrap.min.css";

// Set the worker source for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js`;

function PdfUploader() {
  const [pdfHtml, setPdfHtml] = useState(""); // Store formatted HTML output
  const [error, setError] = useState("");

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

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            
            let prevY = null; // Track previous Y position for line breaks
            let pageHtml = `<div style="position: relative;">`; // Store extracted text as HTML

            const pageHeight = page.view[3]; // Get the page height to invert the Y position correctly

            content.items.forEach((item) => {
              let text = item.str;
              if (!text.trim()) return; // Skip empty text

              let fontSize = Math.round(item.transform[0]); // Extract font size
              let xPos = Math.round(item.transform[4]); // Extract X position
              let yPos = Math.round(item.transform[5]); // Extract Y position

              let fontWeight = item.fontName.includes("Bold") ? "bold" : "normal"; // Detect bold
              let fontStyle = item.fontName.includes("Italic") ? "italic" : "normal"; // Detect italic

              // Invert the Y-position to make sure text is rendered top-to-bottom
              yPos = pageHeight - yPos;

              // Increase X position for bold text to prevent overlapping
              if (fontWeight === "bold") {
                xPos += fontSize * 0.2; // Adjust this factor to prevent overlap
              }

              // Add line breaks based on Y position difference
              if (prevY !== null && Math.abs(prevY - yPos) > fontSize / 2) {
                pageHtml += "<br/>";
              }

              // Apply bold color change (for bold text only)
              const boldColor = fontWeight === "bold" ? "color: #407bff;" : "";

              // Create styled span for text with position, font size, weight, and style
              pageHtml += `<span style="font-size: ${fontSize}px; font-weight: ${fontWeight}; font-style: ${fontStyle}; position: absolute; left: ${xPos}px; top: ${yPos}px; ${boldColor}">${text}</span> `;

              prevY = yPos; // Update previous Y position
            });

            pageHtml += `</div>`; // Close page div
            extractedHtml += pageHtml;
          }

          setPdfHtml(extractedHtml || "No text found in this PDF.");
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">PDF Text Extractor</h2>
      <input
        type="file"
        accept="application/pdf"
        className="form-control mb-3"
        onChange={(e) => e.target.files.length && extractText(e.target.files[0])}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="border p-3" style={{ position: "relative", minHeight: "500px" }} dangerouslySetInnerHTML={{ __html: pdfHtml }}></div>
    </div>
  );
}

export default PdfUploader;
