"use client";

import { useRandomQuote } from "~/hooks/useRandomQuote";

export const RandomQuote = () => {
  const { data, isLoading, isError, isSuccess, isRefetching } =
    useRandomQuote();

  return (
    <>
      <p className="w-screen p-10 mt-12 mb-24 text-xl text-center border-y-2 border-slate-500 sm:border-2 sm:w-3/4 sm:rounded-lg md:text-2xl md:p-8 bg-zinc-100">
        {isError && "Bah y a rien qui me vient là... Retente plus tard !"}
        {isLoading && "Patiente chevalier, je réfléchi..."}
        {(isSuccess || isRefetching) && `"${data?.randomQuote.text}"`}
      </p>
    </>
  );
};
