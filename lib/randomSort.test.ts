import { describe, expect, test } from "vitest";
import { randomSort } from "./randomSort";

describe("randomSort", () => {
  test("should shuffle an array in random order", () => {
    const input = [1, 2, 3, 4];
    const output = randomSort([...input]);

    expect(output).toHaveLength(input.length);
    input.forEach((element) => {
      expect(output).toContain(element);
    });

    let isEqual = true;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== output[i]) {
        isEqual = false;
        break;
      }
    }
    expect(isEqual).toBe(false);
  });
});
