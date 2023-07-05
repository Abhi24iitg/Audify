import React, { useState } from 'react';

function Audify() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/convert', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);

        // Create a link element and click it to initiate the file download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'output.mp3';
        link.click();
      } else {
        console.error('Conversion failed:', response.statusText);
      }
    } catch (error) {
      console.error('Conversion failed:', error);
    }
  };

  return (
    <div className="App">
      <h1>Video to Audio Converter</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Convert
      </button>
    </div>
  );
}

export default Audify;