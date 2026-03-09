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
import useTransactions from "../hooks/useTransactions";
import getFileType from "../utils/getFileType";
import parseJSON from "../utils/parseJSON";
import "../styles/FileUploader.css";

function FileUploader() {
  const {
    selectedFile,
    setSelectedFile,
    transactions,
    setTransactions,
    transactionList,
  } = useTransactions();

  return (
    <>
      <div>
        <p>
          This section will render a list of transactions. Your total balance,
          income, and expenses from a Navy Federal Credit Union CSV.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fileType = getFileType(selectedFile);

            if (fileType === "text/csv") {
              parseCSV(selectedFile, setTransactions);
            } else if (fileType === "application/json") {
              parseJSON(selectedFile, setTransactions);
            }
          }}
        >
          <label>NFCU Bank Statement(.csv)</label>
          <input
            type="file"
            name="bank-statement"
            accept=".csv"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="submit">Submit</button>
        </form>{" "}
      </div>
      <br />
      <small>
        For help getting NFCU CSV files. Look here:{" "}
        <a
          href="https://bankxlsx.com/blog/can-i-export-navy-federal-credit-union-nfcu-transactions-to-csv-or-excel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Step-by-step: Export NFCU account activity to CSV (desktop)
        </a>
      </small>
      <hr style={{ border: "2px solid black" }} />
      <div className="container">
        {transactions && (
          <>
            <TotalTransactions amountOfTransactions={transactionList.length} />
          </>
        )}
        {transactions && (
          <>
            <TotalIncome amount={calculateIncome(transactionList)} />
            <TotalExpense amount={calculateExpenses(transactionList)} />
            <TotalBalance amount={calculateBalance(transactionList)} />
          </>
        )}
      </div>
      {transactions &&
        listTransactions(transactions).map((line, i) => {
          return (
            <p key={i}>
              {i + 1}.) {line}
            </p>
          );
        })}

      {transactions && <Chart obj={calculatePercentage(transactions)} />}
    </>
  );
}

export default FileUploader;
