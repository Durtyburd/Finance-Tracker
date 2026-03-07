import { useState } from "react";
import TotalBalance from "./TotalBalance";
import parseJSON from "../utils/parseJSON";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";

function JSONFileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const transactionList = [];

  return (
    <>
      <div>
        <form onSubmit={(e) => parseJSON(e, selectedFile, setTransactions)}>
          <label>Bank Statement (JSON)</label>
          <input
            type="file"
            name="bank-statement"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>
        {transactions &&
          transactions.map(
            (t) => (
              transactionList.push(Number(t.amount)),
              (
                <p key={t.id}>
                  {t.date} - {t.description} - {t.category} - {"$" + t.amount}
                </p>
              )
            ),
          )}
      </div>
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
          .filter((value) => value <= 0)
          .reduce((acc, currentValue) => acc + currentValue, 0)
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
      />
    </>
  );
}

export default JSONFileUploader;
