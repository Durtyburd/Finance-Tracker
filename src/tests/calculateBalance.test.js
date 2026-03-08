import { expect, test } from "vitest";
import calculateBalance from "../utils/calculateBalance";

test("Calculates the balance", () => {
  const transactions1 = [100, -20, -30];
  const transactions2 = [0, 0, 0];
  const transactions3 = [1.5, -0.45, 0, 25];

  expect(calculateBalance(transactions1)).toBe("$50.00");
  expect(calculateBalance(transactions2)).toBe("$0.00");
  expect(calculateBalance(transactions3)).toBe("$26.05");
});
