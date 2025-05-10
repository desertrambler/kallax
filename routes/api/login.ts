import { FreshContext } from "$fresh/server.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  console.log(_req.body);
  test_db()
  const body = 'Success, for now';
  return new Response(body);
};

const test_db = () => {
// Open a database
const db = new DB("test.db");
db.execute(`
  CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

// Run a simple query
for (const name of ["Peter Parker", "Clark Kent", "Bruce Wayne"]) {
  db.query("INSERT INTO people (name) VALUES (?)", [name]);
}

// Print out data in table
for (const [name] of db.query("SELECT name FROM people")) {
  console.log(name);
}

// Close connection
db.close();
}