import { expect, test } from "vitest";
import listTransactions from "../utils/listTransactions";

test("Checks to see if it creates list of transactions", () => {
  const transactions1 = [
    {
      id: 1,
      date: "03/05/2026",
      description: "Google",
      category: "Online Services",
      amount: -8.4,
    },
    {
      id: 2,
      date: "03/03/2026",
      description: "Wave Financial Deposit",
      category: "Deposits",
      amount: 97.1,
    },
  ];
  const transactions2 = [
    {
      id: 1,
      date: "March 5, 2025",
      description: "Burger King",
      category: "Online Services",
      amount: -16.49,
    },
  ];
  const transactions3 = [
    {
      id: 1,
      date: "",
      description: "",
      category: "",
      amount: 0,
    },
  ];

  expect(listTransactions(transactions1)).toEqual([
    "03/05/2026 | Google | Online Services | -$8.40",
    "03/03/2026 | Wave Financial | Deposits | $97.10",
  ]);
  expect(listTransactions(transactions2)).toEqual([
    "March 5, 2025 | Burger King | Online Services | -$16.49",
  ]);
  expect(listTransactions(transactions3)).toEqual(["N/A | N/A | N/A | $0.00"]);
});
