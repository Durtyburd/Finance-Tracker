function calculateExpenses(transactionList) {
  return transactionList
    .filter((value) => value < 0)
    .reduce((acc, currentValue) => acc + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
}

export default calculateExpenses;
