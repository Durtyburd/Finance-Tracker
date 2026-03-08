import { expect, test } from "vitest";
import formatDescription from "../utils/formatDescription";

test("Checks if strings have been formatted correctly", () => {
  const string1 = "Hello World";
  const string2 = "DEBIT-BDC 5048 WAVE PRO WWW.WAVEAPPS. CO";

  expect(formatDescription(string1)).toBe("Hello World");
  expect(formatDescription(string2)).toBe("DEBIT-BDC 5048");
});
