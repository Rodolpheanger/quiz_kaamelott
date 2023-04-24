import type { RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const customRender = (
  jsx: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(
    <QueryClientProvider client={queryClient}>{jsx}</QueryClientProvider>,
    options
  );
};
export const setup = (
  jsx: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return {
    user: userEvent.setup(),
    ...customRender(jsx, options),
  };
};
