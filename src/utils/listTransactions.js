function listTransactions(transactions) {
  return transactions.map((t) => {
    const formattedAmount = Number(t.amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return `${t.date} | ${t.description} | ${t.category} | ${formattedAmount}`;
  });
}

export default listTransactions;
