import { useState } from "react";

function JSONFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

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
          <label>Bank Statement (JSON)</label>
          <input
            type="file"
            name="bank-statement"
            onChange={(e) => setSelectedFile(e.target.files[0])}
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

export default JSONFileUploader;
