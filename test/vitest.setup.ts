import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { fetch } from "cross-fetch";
import { afterAll, afterEach, beforeAll, beforeEach, expect } from "vitest";
import { server } from "./server";
import { router } from "./router";

global.process.env.NEXT_PUBLIC_API_URL = "http://localhost:5174";

expect.extend(matchers);

// eslint-disable-next-line no-undef
global.fetch = fetch;

beforeEach(() => {
  // clean the dom with @react-testing-library
  // https://testing-library.com/docs/react-testing-library/api#cleanup
  cleanup();

  // Mock of the router
  router();
});
// reset handlers after each test
afterEach(() => {
  server.resetHandlers();
});

// Start server before all tests
beforeAll(() => {
  //@ts-ignore
  server.listen({ onUnhandledRequest: "error" });
});
// Stop server after all tests
afterAll(() => {
  server.close();
});
