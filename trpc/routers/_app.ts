import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),

  getU: baseProcedure
    .input(
      z.object({
        a: z.string(),
      })
    )
    .mutation((options) => {
      return {
        inp: options.input.a,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
