import { expect, test } from "vitest";
import calculateExpenses from "../utils/calculateExpenses";

test("Calculates the expenses", () => {
  const transactions1 = [100, -20, -30];
  const transactions2 = [0, 0, 0];
  const transactions3 = [1.5, -0.45, 0, 25];

  expect(calculateExpenses(transactions1)).toBe("-$50.00");
  expect(calculateExpenses(transactions2)).toBe("$0.00");
  expect(calculateExpenses(transactions3)).toBe("-$0.45");
});
