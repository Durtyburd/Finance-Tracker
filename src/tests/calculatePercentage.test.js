import { expect, test } from "vitest";
import calculatePercentage from "../utils/calculatePercentage";

test("Calculates the percentages", () => {
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
    {
      id: 3,
      date: "02/24/2026",
      description: "DEBIT-BDC 5048 WAVE PRO WWW.WAVEAPPS. CO",
      category: "Online Services",
      amount: -19,
    },
    {
      id: 4,
      date: "02/23/2026",
      description: "Canva",
      category: "Online Services",
      amount: -15,
    },
    {
      id: 5,
      date: "02/20/2026",
      description: "DEBIT-BDC 5048 SQSP* WEBSIT#x2302 SQUARESPACE.C NY",
      category: "Online Services",
      amount: -36,
    },
    {
      id: 6,
      date: "02/17/2026",
      description: "DEBIT-BDC 5048 CHECKR PERSO BY CH CHECKR.COM CA",
      category: "Online Services",
      amount: -105.99,
    },
    {
      id: 7,
      date: "02/09/2026",
      description: "Wave Financial Deposit",
      category: "Deposits",
      amount: 97.1,
    },
    {
      id: 8,
      date: "02/05/2026",
      description: "Google",
      category: "Online Services",
      amount: -8.4,
    },
  ];

  expect(calculatePercentage(transactions1)).toEqual({
    Google: 8.71,
    "DEBIT-BDC 5048": 83.51,
    Canva: 7.78,
  });
});
