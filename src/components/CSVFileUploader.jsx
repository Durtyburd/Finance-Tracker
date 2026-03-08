import { useState } from "react";
import parseCSV from "../utils/parseCSV";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import Chart from "./Chart";
import calculatePercentage from "../utils/calculatePercentage";
import TotalTransactions from "./TotalTransactions";
import calculateBalance from "../utils/calculateBalance";
import calculateExpenses from "../utils/calculateExpenses";
import calculateIncome from "../utils/calculateIncome";
import listTransactions from "../utils/listTransactions";

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
        {transactions && (
          <>
            <TotalTransactions amountOfTransactions={transactionList.length} />
          </>
        )}
        {transactions &&
          listTransactions(transactions).map((line, i) => {
            return <p key={i}>{line}</p>;
          })}
      </div>

      {transactions && (
        <>
          <TotalBalance amount={calculateBalance(transactionList)} />
          <TotalIncome amount={calculateIncome(transactionList)} />
          <TotalExpense amount={calculateExpenses(transactionList)} />
          <Chart obj={calculatePercentage(transactions)} />
        </>
      )}
      <hr style={{ border: "2px solid black" }} />
    </>
  );
}

export default CSVFileUploader;
