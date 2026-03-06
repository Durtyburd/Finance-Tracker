import { useState, useRef } from "react";
import renderFile from "../utils/RenderFile";

function PDFFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const canvasRef = useRef(null);

  return (
    <>
      <div>
        <form onSubmit={(e) => renderFile(e, selectedFile, canvasRef)}>
          <label>Bank Statement(PDF)</label>
          <input
            type="file"
            name="bank-statement"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
}

export default PDFFileUploader;
