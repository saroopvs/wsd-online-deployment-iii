import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

const sql = postgres({});

await sql`CREATE TABLE IF NOT EXISTS messages (  id SERIAL PRIMARY KEY, sender TEXT NOT NULL, message TEXT NOT NULL)`;

export { sql };
