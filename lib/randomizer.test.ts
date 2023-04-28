import { describe, test } from "vitest";
import { randomize } from "./randomizer";

describe("randomize", () => {
  test("should return a random number less than the input number", () => {
    const result = randomize(100);
    expect(result).toBeLessThan(100);
  });

  test("should return 0 when input number is 1", () => {
    const result = randomize(1);
    expect(result).toBe(0);
  });

  test("should return NaN when input number is not a valid number", () => {
    const result = randomize(NaN);
    expect(result).toBeNaN();
  });
});
