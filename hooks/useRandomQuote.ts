"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { prefixedFetch } from "~/lib/prefixedFetch";

const RandomQuoteSchema = z.object({
  randomQuote: z.object({ id: z.number(), text: z.string() }),
  randomCharacters: z.array(
    z.object({
      characters_id: z.number(),
      characters_name: z.string(),
    })
  ),
});
export const fetchRandomQuote = async () => {
  return prefixedFetch(`/api/quote`)
    .then((res) => res.json())
    .then((json) => RandomQuoteSchema.parse(json));
};

export const useRandomQuote = () => {
  const [userChoice, setUserChoice] = useState<string>("");

  const { data, error, isLoading, isError, isSuccess, refetch, isRefetching } =
    useQuery({
      queryKey: ["quote"],
      queryFn: () => fetchRandomQuote(),
    });

  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
    userChoice,
    setUserChoice,
  };
};
