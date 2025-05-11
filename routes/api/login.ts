import { DB } from "https://deno.land/x/sqlite/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { JWTPayload, jwtVerify, SignJWT } from "npm:jose@5.9.6";
import "jsr:@std/dotenv/load";

const secret = new TextEncoder().encode(Deno.env.get("JWT_SECRET"));

export const handler: Handlers = {
  async POST(req) {
    const formData = await req.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      return new Response("Invalid input", { status: 400 });
    }

    try {
      const isValid = await authenticateUser(email, password);
      if (!isValid) {
        return new Response("Unauthorized", { status: 401 });
      }

      // In real use, you'd generate and return a JWT or session here
      return new Response("User authenticated; JWT created", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });

    } catch (err) {
      console.error("Authentication error:", err);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};

const authenticateUser = async (
  email: string,
  password: string,
): Promise<boolean> => {
  const db = new DB("kallax.db");

  try {
    const rows = [...db.query("SELECT hashed_password FROM users WHERE email = ?", [email])];

    if (rows.length === 0) {
      return false;
    }

    const [hashedPassword] = String(rows[0]);
    return await bcrypt.compare(password, hashedPassword);

  } finally {
    db.close();
  }
};
