import { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadPdf from "../../assets/UploadPdf.gif";
import EditIcon from "../../assets/EditIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import SaveIcon from "../../assets/SaveIcon.png";
import { ROOT_URL } from "../RootUrl/rooturl";

function PdfUploader({ section, func }) {
  const [pdfDocuments, setPdfDocuments] = useState([]);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editedHtml, setEditedHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterDocumentId, setFilterDocumentId] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${ROOT_URL}/documents/${section}`);
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

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (const file of files) {
      formData.append('pdfs', file);
    }

    try {
      const response = await fetch(`${ROOT_URL}/upload/${section}`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const updated = await fetch(`${ROOT_URL}/documents/${section}`);
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

  const handleDelete = async (id) => {
    if (window.confirm("Delete this document?")) {
      await fetch(`${ROOT_URL}/document/${id}`, {
        method: 'DELETE'
      });
      setPdfDocuments(pdfDocuments.filter(doc => doc.id !== id));
    }
  };

  const handleSaveEdit = async () => {
    await fetch(`${ROOT_URL}/document/${isEditing}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ htmlData: editedHtml })
    });

    const updated = await fetch(`${ROOT_URL}/documents/${section}`);
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
    setIsEditing(null);
    setFilterDocumentId(null);
  };

  const handleEdit = (docId) => {
    const document = pdfDocuments.find(doc => doc.id === docId);
    if (document) {
      setIsEditing(docId);
      setEditedHtml(document.htmlData);
      setFilterDocumentId(docId);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setFilterDocumentId(null);
  };

  const filteredDocuments = filterDocumentId
    ? pdfDocuments.filter(doc => doc.id === filterDocumentId)
    : pdfDocuments;

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
          <div style={{ display: "flex", gap: "1rem" }}>
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
              <div className="d-flex justify-content-center gap-3 align-items-center">
                <div onClick={() => handleEdit(filterDocumentId)} style={{ cursor: "pointer" }}>
                  <img src={EditIcon} height="20" alt="Edit" />
                </div>
                <div onClick={() => handleDelete(filterDocumentId)} style={{ cursor: "pointer" }}>
                  <img src={DeleteIcon} height="20" alt="Delete" />
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

      {error && <div className="alert alert-danger mt-2">{error}</div>}

      {isLoading && (
        <div className="text-center mt-3">
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
                  <img src={SaveIcon} height="20" alt="Save" className="me-2" />
                  Save
                </button>
                <button className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Uncomment below if you want a placeholder when no docs exist */}
      {/* {!pdfDocuments.length && !isLoading && (
        <div className="text-center mt-4">
          <img src={UploadPdf} alt="Upload PDF" style={{ maxWidth: "300px" }} />
          <p className="mt-2">Upload PDF files to get started with {section}</p>
        </div>
      )} */}
    </div>
  );
}

export default PdfUploader;
