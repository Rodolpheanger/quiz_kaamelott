import { rest } from "msw";

export const restHandlers = [
  rest.get("http://localhost:5174/api/quote", async (req, res, ctx) => {
    return res(
      ctx.json({
        randomQuote: { id: 1, text: "Excalibur" },
        randomCharacters: [
          {
            characters_id: 1,
            characters_name: "Good character",
          },
        ],
      })
    );
  }),
];
