import { prisma } from "./prisma";

export const getCharactersCount = async () => {
  const charactersCount: number = await prisma.characters.count();
  return charactersCount;
};

export const getRandomCharacter = async (randomId: number) => {
  return await prisma.characters.findUniqueOrThrow({
    where: {
      characters_id: randomId,
    },
    select: {
      characters_id: true,
      characters_name: true,
    },
  });
};

export const getQuoteCharacter = async (quoteId: number) => {
  return await prisma.quotes.findUniqueOrThrow({
    where: {
      quotes_id: quoteId,
    },
    select: {
      characters: {
        select: {
          characters_id: true,
          characters_name: true,
        },
      },
    },
  });
};
