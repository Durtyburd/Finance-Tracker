import { useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?worker";
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

function PDFFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const canvasRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return;
    const arrayBuffer = await selectedFile.arrayBuffer();
    const uint8Arr = new Uint8Array(arrayBuffer);
    const loadingTask = pdfjsLib.getDocument(uint8Arr);
    loadingTask.promise.then(function (pdf) {
      pdf.getPage(1).then(function (page) {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
        const outputScale = window.devicePixelRatio || 1;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";
        let transform =
          outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        const renderContext = {
          canvasContext: context,
          transform: transform,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
