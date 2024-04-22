import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
  rest.get(`${API_URL}`, (req, res, ctx) => {
    const character = req.url.searchParams.get("character");
    return res(
      ctx.status(200),
      ctx.json([
        {
          quote: "this is a testing quote",
          character: character,
          image: "",
          characterDirection: "",
        },
      ])
    );
  }),
];