import { useState, useRef } from "react";
import renderPDF from "../utils/renderPDF";
import parsePDF from "../utils/parsePDF";

function PDFFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const canvasRef = useRef(null);

  return (
    <>
      <div>
        <p>This section will render your PDF file to screen.</p>
        <form
          onSubmit={(e) => {
            renderPDF(e, selectedFile, canvasRef);
            parsePDF(e, selectedFile);
          }}
        >
          <label>Bank Statement(.pdf)</label>
          <input
            type="file"
            name="bank-statement"
            accept=".pdf"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
        <div ref={canvasRef}></div>
      </div>
    </>
  );
}

export default PDFFileUploader;
