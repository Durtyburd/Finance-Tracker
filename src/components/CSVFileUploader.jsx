import { useState } from "react";
import parseCSV from "../utils/parseCSV";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import Chart from "./Chart";
import calculatePercentage from "../utils/calculatePercentage";

function CSVFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const transactionList = transactions
    ? transactions.map((t) => Number(t.amount))
    : [];

  return (
    <>
      <div>
        <p>
          This section will render a list of transactions. Your total balance,
          income, and expenses from a CSV file.
        </p>
        <form onSubmit={(e) => parseCSV(e, selectedFile, setTransactions)}>
          <label>Bank Statement(.csv)</label>
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
          <Chart obj={calculatePercentage(transactions)} />
          <hr />
        </>
      )}
    </>
  );
}

export default CSVFileUploader;
