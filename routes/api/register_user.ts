import { DB, QueryParameter } from "https://deno.land/x/sqlite/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const formData = await req.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      return new Response("Invalid input", { status: 400 });
    }

    console.log(email, password)
    return new Response("Success", {status: 200});
    /*try {
      await saveUserAndPassword(email, password);
      return new Response("User saved", {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (err) {
      console.error("Error saving user:", err);
      return new Response("Internal server error", { status: 500 });
    }*/
  },
};

const saveUserAndPassword = async (
  email: string,
  plainPassword: string,
): Promise<void> => {
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  const db = new DB("kallax.db");

  db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      hashed_password TEXT NOT NULL
    )
  `);

  db.query("INSERT INTO users (email, hashed_password) VALUES (?, ?)", [
    email as QueryParameter,
    hashedPassword as QueryParameter,
  ]);

  db.close();
};
