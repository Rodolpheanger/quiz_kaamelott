import { useRouter } from "next/navigation";
import { Mock, vi } from "vitest";

export const router = ((useRouter as Mock) = vi.fn(() => ({
  query: {},
  push: vi.fn(),
})));
