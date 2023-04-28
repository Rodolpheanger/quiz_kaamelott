import { rest } from "msw";

const prefix = "http://localhost:5174";

export const restHandlers = [
  rest.get(`${prefix}/api/quote`, async (req, res, ctx) => {
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
