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

const authenticateUser = async (
  inputtedEmail: string,
  inputtedPassword: string,
): Promise<void> => {
    // Get DB
    const db = new DB("kallax.db");
    // Check all users in the db
      const existingUserEmail = db.execute(`
    SELECT * FROM users WHERE email = ?
  `, [inputtedEmail]);

  if (!existingUserEmail) {
    return 'User does not exist'
  } else {
    const result = await bcrypt.compare("test", hash);
  }


  console.log(existingUserEmail)


  db.close();
};
