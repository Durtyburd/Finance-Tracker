function calculateBalance(transactionList) {
  return transactionList
    .reduce((acc, currentValue) => acc + currentValue, 0)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
}

export default calculateBalance;
