import { test } from "vitest";
import { fetchRandomQuote } from "~/hooks/useRandomQuote";

test("fetch random quote", async () => {
  const quote = await fetchRandomQuote();
  expect(quote.randomQuote.text).toEqual("Excalibur");
});
