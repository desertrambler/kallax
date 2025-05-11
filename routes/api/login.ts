import { DB } from "https://deno.land/x/sqlite/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { Handlers } from "$fresh/server.ts";
import { JWTPayload, jwtVerify, SignJWT } from "npm:jose@5.9.6";
import "jsr:@std/dotenv/load";
import { setCookie } from "https://deno.land/std@0.207.0/http/cookie.ts";

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

      const jwt = await createJWT({ email });

      const headers = new Headers();

      setCookie(headers, {
        name: "Auth",
        value: jwt,
        path: "/",
        //domain: "domain.com",
        httpOnly: true,
        secure: true,
        sameSite: "None",
        expires: new Date(Date.now() + 500000),
      });

      headers.set("Content-Type", "text/plain");

      return new Response("Cookie set", { headers });

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
    const rows = [
      ...db.query("SELECT hashed_password FROM users WHERE email = ?", [email]),
    ];

    if (rows.length === 0) {
      return false;
    }

    const hashedPassword = rows[0][0] as string;
    return await bcrypt.compare(password, hashedPassword);
  } finally {
    db.close();
  }
};

async function createJWT(payload: JWTPayload): Promise<string> {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  return jwt;
}

// TODO: use this to verify JWT's
/*async function verifyJWT(token: string): Promise<JWTPayload | null> {
  try {

    const { payload } = await jwtVerify(token, secret);
    console.log("JWT is valid:", payload);
    return payload;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}*/
