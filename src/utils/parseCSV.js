import Papa from "papaparse";

function parseCSV(file, setter) {
  if (!file) return;
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const rows = results.data;

      if (!rows.length || !rows[0]["Posting Date"]) {
        alert("This is not a valid NFCU CSV file.");
        setter(null);
        return;
      }
      const transactions = results.data.map((row, index) => {
        const rawAmount = Number(row["Amount"]);
        const indicator = row["Credit Debit Indicator"]?.trim();

        let signedAmount = rawAmount;

        if (indicator === "Debit") {
          signedAmount = -rawAmount;
        } else if (indicator === "Credit") {
          signedAmount = rawAmount;
        }
        return {
          id: index + 1,
          date: row["Posting Date"],
          description: row["Description"],
          category: row["Category"] || "Other",
          amount: signedAmount,
        };
      });
      setter(transactions);
    },
  });
}

export default parseCSV;
