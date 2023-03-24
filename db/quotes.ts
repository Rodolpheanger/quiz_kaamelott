import { prisma } from "./prisma";

export const getQuotesCount = async () => {
  const quoteCount: number = await prisma.quotes.count();
  return quoteCount;
};

export const getRandomQuote = async (randomId: number) => {
  const randomQuote = await prisma.quotes.findUniqueOrThrow({
    where: {
      quotes_id: randomId,
    },
    select: {
      quotes_id: true,
      quotes_text: true,
      characters: {
        select: {
          characters_id: true,
          characters_name: true,
        },
      },
    },
  });
  return randomQuote;
};
