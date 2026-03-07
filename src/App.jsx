import CSVFileUploader from "./components/CSVFileUploader";
import JSONFileUploader from "./components/JSONFileUploader";
import PDFFileUploader from "./components/pdfFileUploader";
import TotalIncome from "./components/TotalBalance";

function App() {
  return (
    <>
      <div>
        <h1>Finance Tracker</h1>
        <CSVFileUploader />
        <JSONFileUploader />
        <PDFFileUploader />
      </div>
    </>
  );
}

export default App;
