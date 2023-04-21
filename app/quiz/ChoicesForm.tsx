"use client";
import { useRandomQuote } from "~/hooks/useRandomQuote";
import { SubmitHandler, useForm } from "react-hook-form";
import { Response } from "./Response";
import { useNewQuestion } from "~/hooks/useNewQuestion";

export const dynamic = "force-dynamic";

type FormData = {
  characterId: string;
};

type Character = {
  characters_id: number;
  characters_name: string;
};

export const ChoicesForm = () => {
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

  const onSubmit: SubmitHandler<FormData> = (choice) => {
    setIsSubmitted(true);
    setIsNewQuestion(false);
    setUserChoice(choice.characterId);
  };

  const resetForm = () => {
    getNewQuestion();
    reset();
  };

  return (
    <div>
      {isRefetching && (
        <p className="p-8 text-2xl text-center md:text-4xl md:p-8">
          Attend chevalier, j&apos;en cherche une autre...
        </p>
      )}
      {!isSubmitted && (
        <form
          className="flex flex-col items-center justify-center gap-12 p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center gap-6 font-semibold sm:flex-row">
            {data?.randomCharacters.map(
              (character: Character, index: number) => {
                return (
                  <div
                    className="flex"
                    key={index}
                  >
                    <input
                      {...register("characterId")}
                      type="radio"
                      value={character.characters_id}
                      id={`choice${index}`}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`choice${index}`}
                      className="px-4 py-2 text-center border-2 border-gray-500 rounded-md cursor-pointer bg-zinc-50 hover:bg-gray-200 peer-checked:bg-gray-400 peer-checked:border-black"
                    >
                      {character.characters_name}
                    </label>
                  </div>
                );
              }
            )}
          </div>
          <input
            type="submit"
            className="px-4 py-2 font-semibold text-white rounded-md bg-slate-900 hover:bg-slate-600 hover:cursor-pointer"
            value="Valider"
          />
        </form>
      )}

      {isSubmitted && !isNewQuestion && (
        <div className="flex flex-col items-center justify-center gap-12 p-10">
          <Response
            quoteId={Number(quoteId)}
            choice={Number(userChoice)}
          />
          <button
            type="button"
            onClick={() => resetForm()}
            className="px-4 py-2 font-semibold text-white rounded-md bg-slate-900 hover:bg-slate-600 hover:cursor-pointer"
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
};
