"use client";

import { useRandomQuote } from "~/hooks/useRandomQuote";

export const RandomQuote = () => {
  const { data, isLoading, isError, isSuccess, isRefetching } =
    useRandomQuote();

  return (
    <>
      <p className="p-4 m-8 text-2xl border-2 border-black rounded-lg md:text-3xl md:p-8 bg-zinc-100">
        {isError && "Bah y a rien qui me vient là... Retente plus tard !"}
        {isLoading && "Patiente chevalier, je réfléchi..."}
        {(isSuccess || isRefetching) && `"${data?.randomQuote.text}"`}
      </p>
    </>
  );
};
