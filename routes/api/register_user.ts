import { DB, QueryParameter } from "https://deno.land/x/sqlite/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    try {
      const formData = await req.formData();

      const email = formData.get("email");
      const password = formData.get("password");

      if (typeof email !== "string" || typeof password !== "string") {
        return new Response("Invalid input", { status: 400 });
      }

      if (password.length < 8) {
        return new Response("Password must be at least 8 characters", {
          status: 400,
        });
      }

      const userSaved = await saveUserAndPassword(email, password);

      if (!userSaved) {
        return new Response("Email already in use", { status: 409 });
      }

      return new Response("User saved", {
        status: 201,
        headers: { "Content-Type": "text/plain" },
      });
    } catch (err) {
      console.error("Error handling registration:", err);
      return new Response("Internal server error", { status: 500 });
    }
  },
};

const saveUserAndPassword = async (
  email: string,
  plainPassword: string,
): Promise<boolean> => {
  const db = new DB("kallax.db");
  try {
    db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        hashed_password TEXT NOT NULL
      )
    `);

    // Check for existing email
    const exists = [...db.query("SELECT 1 FROM users WHERE email = ?", [email])].length > 0;
    if (exists) {
      return false;
    }

    const hashedPassword = await bcrypt.hash(plainPassword);

    db.query("INSERT INTO users (email, hashed_password) VALUES (?, ?)", [
      email as QueryParameter,
      hashedPassword as QueryParameter,
    ]);

    return true;
  } finally {
    db.close();
  }
};
