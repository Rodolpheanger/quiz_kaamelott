import React from "react";
import { screen } from "@testing-library/react";
import Quiz from "./page";
import { customRender } from "~/test/utils";
import { expect } from "vitest";

test("renders RandomQuote and ChoicesForm components", async () => {
  customRender(<Quiz />);
  screen.debug();
  const RandomQuote = screen.getByText(/patiente/i);
  const ChoicesForm = screen.getByRole("button", { name: /valider/i });
  expect(RandomQuote).toBeInTheDocument();
  expect(ChoicesForm).toBeInTheDocument();
});
