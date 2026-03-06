import JSONFileUploader from "./components/JSONFileUploader";
import PDFFileUploader from "./components/pdfFileUploader";

function App() {
  return (
    <>
      <div>
        <h1>Finance Tracker</h1>
        <JSONFileUploader />
        <PDFFileUploader />
      </div>
    </>
  );
}

export default App;
