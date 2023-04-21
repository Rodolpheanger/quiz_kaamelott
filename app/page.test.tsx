import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "./page";

describe("Home", () => {
  test("Link has href='/quiz'", async () => {
    render(<Home />);
    const link: any = screen.getByRole("link", { name: /commencer le quiz/i });
    expect(link).toHaveAttribute("href", "/quiz");
  });
});
