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
    <p className="text-2xl font-semibold text-center">
      {isLoading && "..."}
      {isError &&
        "Ah ben merde alors... pas moyen de me rappeler qui a dit ça..."}
      {isWin &&
        "Bravo chevalier, tu as trouvé le Graal... Enfin... Euh... La bonne réponse, c'est déjà bien !"}
      {!isLoading &&
        !isWin &&
        `Aie, aie, aie, la boulette, c'est ${data?.characters.characters_name} qui a dit ça !`}
    </p>
  );
};
