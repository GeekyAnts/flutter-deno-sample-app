import { Client } from "https://deno.land/x/postgres/mod.ts";

async function main() {
  const client = new Client({
    user: "admin",
    database: "scrollahead",
    port : 5432,
    hostname : "localhost"
  });
  await client.connect();
  const result = await client.query("SELECT * FROM posts;");
  console.log(result.rows);
  await client.end();
}

main();