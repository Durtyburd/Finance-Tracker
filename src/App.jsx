import CSVFileUploader from "./components/CSVFileUploader";
import JSONFileUploader from "./components/JSONFileUploader";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>NFCU Finance Tracker</h1>
        <CSVFileUploader />
        <JSONFileUploader />
      </div>
    </>
  );
}

export default App;
