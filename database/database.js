import { postgres } from "../deps.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({});
}

await sql`CREATE TABLE IF NOT EXISTS messages (  id SERIAL PRIMARY KEY, sender TEXT NOT NULL, message TEXT NOT NULL)`;
export { sql };
