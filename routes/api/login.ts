import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const formData = await req.formData();
    console.log("Form data:", formData);

    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Email:", email);
    console.log("Password:", password);

    return new Response("Body logged", {
      headers: { "Content-Type": "text/plain" },
    });
  },
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
