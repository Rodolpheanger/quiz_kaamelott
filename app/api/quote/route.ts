import { NextResponse } from "next/server";
import { getCharactersCount, getRandomCharacter } from "~/db/characters";
import { getRandomQuote, getQuotesCount } from "~/db/quotes";
import { randomize } from "~/lib/randomizer";
import { randomSort } from "~/lib/randomSort";

export const dynamic = "force-dynamic";

type Character = { characters_id?: number; characters_name?: string };
type Quote = {
  characters: {
    characters_id: number;
    characters_name: string;
  };
  quotes_id: number;
  quotes_text: string;
};

export async function GET() {
  const quotesCount = await getQuotesCount();
  const charactersCount = await getCharactersCount();
  const randomId = randomize(quotesCount);
  const randomQuote: Quote = await getRandomQuote(randomId);
  const randomQuoteCharacter: Character = {
    characters_id: randomQuote.characters.characters_id,
    characters_name: randomQuote.characters.characters_name,
  };
  const randomCharacters: Character[] = [randomQuoteCharacter];

  while (randomCharacters.length < 4) {
    const randomId = randomize(charactersCount);
    const randomCharacter: Character = await getRandomCharacter(randomId);
    let isAlreadyIncluded = false;

    for (const character of randomCharacters) {
      if (character.characters_id === randomCharacter.characters_id) {
        isAlreadyIncluded = true;
      }
    }
    if (!isAlreadyIncluded) randomCharacters.push(randomCharacter);
  }

  return NextResponse.json(
    {
      randomQuote: { id: randomQuote.quotes_id, text: randomQuote.quotes_text },
      randomCharacters: randomSort(randomCharacters),
    },
    { status: 200 }
  );
}
