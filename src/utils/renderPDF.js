import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?worker";
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

async function renderPDF(e, file, containerRef) {
  e.preventDefault();
  if (!file) return;

  const container = containerRef.current;
  if (!containerRef) return;

  container.innerHTML = "";

  const arrayBuffer = await file.arrayBuffer();
  const uint8Arr = new Uint8Array(arrayBuffer);

  const loadingTask = pdfjsLib.getDocument(uint8Arr);
  const pdfDoc = await loadingTask.promise;

  for (let pageNum = 1; pageNum < pdfDoc.numPages + 1; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);

    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });
    const outputScale = window.devicePixelRatio || 1;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    container.appendChild(canvas);

    let transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    const renderContext = {
      canvasContext: context,
      transform,
      viewport,
    };
    const renderTask = page.render(renderContext);
    await renderTask.promise;
  }
}

export default renderPDF;
