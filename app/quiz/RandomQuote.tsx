"use client";

import { useRandomQuote } from "~/hooks/useRandomQuote";

export const RandomQuote = () => {
  const { data, isLoading, isError, isSuccess, isRefetching } =
    useRandomQuote();

  return (
    <>
      <p className="w-screen p-10 my-8 text-2xl text-center border-y-2 border-slate-500 md:border-2 md:w-3/4 md:rounded-lg md:text-3xl md:p-8 bg-zinc-100">
        {isError && "Bah y a rien qui me vient là... Retente plus tard !"}
        {isLoading && "Patiente chevalier, je réfléchi..."}
        {(isSuccess || isRefetching) && `"${data?.randomQuote.text}"`}
      </p>
    </>
  );
};
