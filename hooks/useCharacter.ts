import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const CharacterSchema = z.object({
  characters: z.object({
    characters_id: z.number(),
    characters_name: z.string(),
  }),
});

const fetchQuoteById = async (quoteId: number) => {
  return fetch(`/api/quote/${quoteId}`)
    .then((res) => res.json())
    .then((json) => CharacterSchema.parse(json));
};

export const useCharacter = (quoteId: number) => {
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["quote", quoteId],
    queryFn: () => fetchQuoteById(quoteId),
  });
  return { data, error, isLoading, isError, isSuccess };
};
