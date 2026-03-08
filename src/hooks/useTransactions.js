import { useState } from "react";

function useTransactions() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const transactionList = transactions
    ? transactions.map((t) => Number(t.amount))
    : [];

  return {
    selectedFile,
    setSelectedFile,
    transactions,
    setTransactions,
    transactionList,
  };
}

export default useTransactions;
