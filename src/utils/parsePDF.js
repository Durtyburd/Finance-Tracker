import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?worker";
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

async function parsePDF(e, file) {
  e.preventDefault();
  if (!file) return;

  const arrayBuffer = await file.arrayBuffer();
  const uint8Arr = new Uint8Array(arrayBuffer);

  const loadingTask = pdfjsLib.getDocument(uint8Arr);
  const pdfDoc = await loadingTask.promise;
  let extractedText = "";
  for (let pageNum = 1; pageNum < pdfDoc.numPages + 1; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item) => item.str).join(" ");
    extractedText += pageText + "\n\n";
  }
  console.log(extractedText);
}

export default parsePDF;
