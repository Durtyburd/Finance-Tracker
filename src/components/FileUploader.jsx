import { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const parsed = JSON.parse(event.target.result);
      setTransactions(parsed.transactions); // assuming your JSON has { transactions: [...] }
    };
    reader.readAsText(selectedFile);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Bank Statement</label>
          <input
            type="file"
            name="bank-statement"
            onChange={handleFileChange}
          />
          <button type="submit">Submit</button>
        </form>
        {transactions &&
          transactions.map((t) => (
            <p key={t.id}>
              {t.date} - {t.description} - {t.category} - {"$" + t.amount}
            </p>
          ))}
      </div>
    </>
  );
}

export default FileUploader;
