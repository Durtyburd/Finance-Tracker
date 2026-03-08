import { expect, test } from "vitest";
import getFileType from "../utils/getFileType";

test("Checks if the file type is correct", () => {
  const file1 = {
    type: "text/csv",
  };
  const file2 = {
    type: "application/json",
  };

  expect(getFileType(file1)).toBe("text/csv");
  expect(getFileType(file2)).toBe("application/json");
});
