import React from "react";
import { screen } from "@testing-library/react";
import Quiz from "./page";
import { customRender } from "~/test/utils";

test("renders RandomQuote and ChoicesForm components", async () => {
  customRender(<Quiz />);
  screen.debug();
});
