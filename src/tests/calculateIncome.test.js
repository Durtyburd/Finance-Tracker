import { expect, test } from "vitest";
import calculateIncome from "../utils/calculateIncome";

test("Calculates the income", () => {
  const transactions1 = [100, -20, -30];
  const transactions2 = [0, 0, 0];
  const transactions3 = [1.5, -0.45, 0, 25];

  expect(calculateIncome(transactions1)).toBe("$100.00");
  expect(calculateIncome(transactions2)).toBe("$0.00");
  expect(calculateIncome(transactions3)).toBe("$26.50");
});
