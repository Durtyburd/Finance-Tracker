import { useState, useRef } from "react";
import renderPDF from "../utils/renderPDF";

function PDFFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const canvasRef = useRef(null);

  return (
    <>
      <div>
        <form onSubmit={(e) => renderPDF(e, selectedFile, canvasRef)}>
          <label>Bank Statement(PDF)</label>
          <input
            type="file"
            name="bank-statement"
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
