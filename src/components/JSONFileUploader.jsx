import { useState } from "react";
import TotalBalance from "./TotalBalance";
import parseJSON from "../utils/parseJSON";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";
import TotalTransactions from "./TotalTransactions";
import Chart from "./Chart";
import calculatePercentage from "../utils/calculatePercentage";
import calculateBalance from "../utils/calculateBalance";
import calculateIncome from "../utils/calculateIncome";
import calculateExpenses from "../utils/calculateExpenses";
import listTransactions from "../utils/listTransactions";

function JSONFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const transactionList = transactions
    ? transactions.map((t) => Number(t.amount))
    : [];

  return (
    <>
      <div>
        <p>
          This section will render a list of transactions, total balance,
          income, and expenses from a JSON file.
        </p>
        <form onSubmit={(e) => parseJSON(e, selectedFile, setTransactions)}>
          <label>Bank Statement(.json)</label>
          <input
            type="file"
            name="bank-statement"
            accept=".json"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
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

export default JSONFileUploader;
