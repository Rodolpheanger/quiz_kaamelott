"use client";
import { useRandomQuote } from "~/hooks/useRandomQuote";
import { SubmitHandler, useForm } from "react-hook-form";
import { Response } from "./Response";
import { useNewQuestion } from "~/hooks/useNewQuestion";
import { useState } from "react";

export const dynamic = "force-dynamic";

type FormData = {
  characterId: string;
};

type Character = {
  characters_id: number;
  characters_name: string;
};

export const ChoicesForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { data, userChoice, setUserChoice, isRefetching } = useRandomQuote();
  const {
    isSubmitted,
    setIsSubmitted,
    getNewQuestion,
    isNewQuestion,
    setIsNewQuestion,
  } = useNewQuestion();

  const quoteId = data?.randomQuote.id;

  const handleRadioClick = () => {
    setIsChecked(true);
  };

  const onSubmit: SubmitHandler<FormData> = (choice) => {
    setIsSubmitted(true);
    setIsNewQuestion(false);
    setUserChoice(choice.characterId);
  };

  const resetForm = () => {
    getNewQuestion();
    reset();
    setIsChecked(false);
  };

  return (
    <div>
      {isRefetching && (
        <p className="p-8 text-xl text-center md:text-2xl md:h-[140px]">
          Attend chevalier, j&apos;en cherche une autre...
        </p>
      )}
      {!isSubmitted && (
        <form
          className="flex flex-col items-center justify-center gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center justify-center font-semibold border-2 divide-y-2 divide-gray-500 border-y-gray-500 sm:divide-none sm:border-none sm:gap-6 md:w-auto sm:flex-row">
            {data?.randomCharacters.map(
              (character: Character, index: number) => {
                return (
                  <div
                    className="flex "
                    key={index}
                  >
                    <input
                      {...register("characterId")}
                      type="radio"
                      value={character.characters_id}
                      id={`choice${index}`}
                      className="hidden peer"
                      onClick={handleRadioClick}
                    />
                    <label
                      htmlFor={`choice${index}`}
                      className="w-screen px-4 py-2 text-center cursor-pointer sm:border-2 sm:w-full md:text-xl sm:border-gray-500 sm:rounded-md md:w-auto bg-zinc-50 hover:bg-gray-200 peer-checked:bg-gray-400 peer-checked:border-black"
                    >
                      {character.characters_name}
                    </label>
                  </div>
                );
              }
            )}
          </div>
          <input
            disabled={!isChecked}
            type="submit"
            className="px-4 py-2 font-semibold text-white rounded-md bg-slate-900 hover:bg-slate-600 hover:cursor-pointer md:text-xl md:w-28"
            value="Valider"
          />
        </form>
      )}

      {isSubmitted && !isNewQuestion && (
        <div className="flex flex-col items-center justify-between gap-12">
          <Response
            quoteId={Number(quoteId)}
            choice={Number(userChoice)}
          />
          <button
            type="button"
            onClick={() => resetForm()}
            className="px-4 py-2 font-semibold text-white rounded-md md:text-xl bg-slate-900 hover:bg-slate-600 hover:cursor-pointer md:w-28"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
};
