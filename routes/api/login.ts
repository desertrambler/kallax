import { DB } from "https://deno.land/x/sqlite/mod.ts";
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

    try {
      await authenticateUser(email, password);
      return new Response("User authenticated; JWT created", {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (err) {
      console.error("Error authenticating user:", err);
      return new Response("Internal server error", { status: 500 });
    }
  },
};

const authenticateUser = (
  inputtedEmail: string,
  inputtedPassword: string,
): void => {
  const db = new DB("kallax.db");

  try {
    const rows = [...db.query(
      "SELECT * FROM users WHERE email = ?",
      [inputtedEmail],
    )];

    if (rows.length === 0) {
      console.log("User not found.");
    } else {
      const db_output = rows[0].toString();

      // Check if user is in the output - TODO: register more users for testing more output

      const password_hash = db_output.split(",")[2].trim();

      console.log(password_hash)

      // TODO: compare inputtedPassword with passwordHash
      //const result = bcrypt.compare(inputtedPassword, passwordHash);
    }
  } catch (err) {
    console.error("Database error:", err);
  } finally {
    db.close();
  }
};


