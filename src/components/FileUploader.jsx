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
      <hr style={{ border: "2px solid black" }} />
      {transactions && (
        <>
          <TotalTransactions amountOfTransactions={transactionList.length} />
        </>
      )}
      {transactions &&
        listTransactions(transactions).map((line, i) => {
          return <p key={i}>{line}</p>;
        })}

      {transactions && (
        <>
          <TotalIncome amount={calculateIncome(transactionList)} />
          <TotalExpense amount={calculateExpenses(transactionList)} />
          <TotalBalance amount={calculateBalance(transactionList)} />
          <Chart obj={calculatePercentage(transactions)} />
        </>
      )}
    </>
  );
}

export default FileUploader;
