// routes/_middleware.ts
import { FreshContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  const cookies = getCookies(req.headers);
  const auth = cookies["Auth"];

  if (!auth) {
    return new Response("Unauthorized", { status: 401 });
  }

    return await ctx.next();
}