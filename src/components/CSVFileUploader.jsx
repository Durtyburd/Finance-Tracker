import { useState } from "react";
import parseCSV from "../utils/parseCSV";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

function CSVFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const transactionList = transactions
    ? transactions.map((t) => Number(t.amount))
    : [];

  return (
    <>
      <div>
        <form onSubmit={(e) => parseCSV(e, selectedFile, setTransactions)}>
          <label>Bank Statement(CSV)</label>
          <input
            type="file"
            name="bank-statement"
            accept=".csv"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>{" "}
        {transactions &&
          transactions.map((t) => (
            <p key={t.id}>
              {t.date} | {t.description} | {t.category} |{" "}
              {Number(t.amount).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          ))}
      </div>

      {transactions && (
        <>
          <TotalBalance
            amount={transactionList
              .reduce((acc, currentValue) => acc + currentValue, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          />
          <TotalIncome
            amount={transactionList
              .filter((value) => value > 0)
              .reduce((acc, currentValue) => acc + currentValue, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          />
          <TotalExpense
            amount={transactionList
              .filter((value) => value < 0)
              .reduce((acc, currentValue) => acc + currentValue, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          />
          <hr />
        </>
      )}
    </>
  );
}

export default CSVFileUploader;
