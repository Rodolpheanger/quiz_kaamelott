import { expect, test, vi } from "vitest";
import { prefixedFetch } from "./prefixedFetch";

const originalEnvironment = process.env.NODE_ENV;

describe("prefixedFetch", () => {
  let fetchStub: ReturnType<typeof vi.fn>;
  const prefix = process.env.NEXT_PUBLIC_API_URL;

  beforeEach(() => {
    fetchStub = vi.fn(() => Promise.resolve());
    vi.stubGlobal("fetch", fetchStub);
  });
  afterEach(() => {
    //@ts-ignore
    process.env.NODE_ENV = originalEnvironment;
  });
  test("should use the localhost prefix in development environment", async () => {
    //@ts-ignore
    process.env.NODE_ENV = "development";
    await prefixedFetch("/development");
    expect(fetchStub).toHaveBeenCalledWith(`${prefix}/development`);
  });
  test("should use the localhost prefix in test environment", async () => {
    await prefixedFetch("/test");
    expect(fetchStub).toHaveBeenCalledWith(`${prefix}/test`);
  });

  test("should not use the localhost prefix in other environments", async () => {
    //@ts-ignore
    process.env.NODE_ENV = "production";
    await prefixedFetch("/production");

    expect(fetchStub).toHaveBeenCalledWith("/production");
  });
});
