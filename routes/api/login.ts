import { FreshContext } from "$fresh/server.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

// GET request: calls test_db and responds
export const GET = (_req: Request, _ctx: FreshContext): Response => {
  test_db();
  const body = "Success, for now";
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
};

// POST request: logs request body
export const POST = async (req: Request, _ctx: FreshContext): Promise<Response> => {
  const bodyText = await req.text(); // or req.json() for JSON
  console.log("Request body:", bodyText);

  return new Response("Body logged", {
    headers: { "Content-Type": "text/plain" },
  });
};

// Database function (not async, as it uses only sync methods)
const test_db = (): void => {
  const db = new DB("test.db");

  db.execute(`
    CREATE TABLE IF NOT EXISTS people (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  for (const name of ["Peter Parker", "Clark Kent", "Bruce Wayne"]) {
    db.query("INSERT INTO people (name) VALUES (?)", [name]);
  }

  for (const [name] of db.query("SELECT name FROM people")) {
    console.log(name);
  }

  db.close();
};
