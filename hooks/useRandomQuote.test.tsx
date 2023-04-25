import { describe, test } from "vitest";
import { fetchRandomQuote } from "~/hooks/useRandomQuote";

describe("useRandomQuote", () => {
  test("should fetch a random quote", async () => {
    const quote = await fetchRandomQuote();
    expect(quote.randomQuote.id).toBe(1);
    expect(quote.randomQuote.text).toBe("Excalibur");
    expect(quote.randomCharacters[0].characters_id).toBe(1);
    expect(quote.randomCharacters[0].characters_name).toBe("Good character");
  });
});
