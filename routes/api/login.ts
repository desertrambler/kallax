import { FreshContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  console.log(_req.body);
  const body = 'Success, for now';
  return new Response(body);
};