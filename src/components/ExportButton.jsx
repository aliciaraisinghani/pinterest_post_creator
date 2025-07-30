import React, { useState } from 'react';
import './ExportButton.css';

const ExportButton = ({ canvasRef }) => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    if (!canvasRef) {
      alert('Canvas not ready. Please wait a moment and try again.');
      return;
    }

    setIsExporting(true);

    try {
      // Convert canvas to blob
      const blob = await new Promise((resolve) => {
        canvasRef.toBlob(resolve, 'image/png', 1.0);
      });

      if (!blob) {
        throw new Error('Failed to create image');
      }

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Generate filename with timestamp
      const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
      link.download = `instagram-post-${timestamp}.png`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      URL.revokeObjectURL(url);
      
      // Show success feedback
      setTimeout(() => {
        setIsExporting(false);
      }, 1000);

    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export image. Please try again.');
      setIsExporting(false);
    }
  };

  return (
    <button
      className={`export-button ${isExporting ? 'exporting' : ''}`}
      onClick={handleExport}
      disabled={isExporting || !canvasRef}
    >
      {isExporting ? (
        <>
          <span className="export-spinner">⏳</span>
          Downloading...
        </>
      ) : (
        <>
          <span className="export-icon">📥</span>
          Download Post (1080×1080)
        </>
      )}
    </button>
  );
};

export default ExportButton;