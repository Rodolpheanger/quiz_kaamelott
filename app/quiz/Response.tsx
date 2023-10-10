"use client";

import { useCharacter } from "~/hooks/useCharacter";

type ResponseProps = {
  quoteId: number;
  choice: number;
};

export const Response = ({ quoteId, choice }: ResponseProps) => {
  const { data, isLoading, isError } = useCharacter(quoteId);
  const isWin = data?.characters.characters_id === choice;

  return (
    <div className="flex flex-col justify-center py-2 text-xl font-semibold text-center align-middle md:text-2xl">
      {isLoading && "..."}
      {isError &&
        "Ah ben merde alors... pas moyen de me rappeler qui a dit ça..."}
      {isWin &&
        "Bravo chevalier, tu as trouvé le Graal... Enfin... Euh... La bonne réponse, c'est déjà bien !"}
      {!isLoading &&
        !isWin &&
        `Aie, aie, aie, la boulette, c'est ${data?.characters.characters_name} qui a dit ça !`}
    </div>
  );
};
