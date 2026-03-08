import formattedDescription from "./formatDescription";

function listTransactions(transactions) {
  return transactions.map((t) => {
    const formattedAmount = Number(t.amount).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const date = t.date ? t.date : "N/A";
    const description = t.description
      ? formattedDescription(t.description)
      : "N/A";
    const category = t.category ? t.category : "N/A";

    return `${date} | ${description} | ${category} | ${formattedAmount}`;
  });
}

export default listTransactions;
