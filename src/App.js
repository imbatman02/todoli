import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const App = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Function to generate and preview the PDF
  const handlePreviewPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('My PDF Document', 10, 20);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('This is a sample PDF generated using jsPDF in React.', 10, 30);

    // Convert the PDF to a data URL
    const pdfDataUrl = doc.output('datauristring');
    setPdfUrl(pdfDataUrl);
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'preview-document.pdf';
    link.click();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>PDF Preview and Download</h1>
      <button
        onClick={handlePreviewPDF}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Generate and Preview PDF
      </button>

      {pdfUrl && (
        <div>
          <h2>PDF Preview</h2>
          <iframe
            src={pdfUrl}
            style={{ width: '80%', height: '500px', border: '1px solid #ccc', margin: '20px auto' }}
            title="PDF Preview"
          />
          <button
            onClick={handleDownloadPDF}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default App;