import { Client } from "https://deno.land/x/postgres/mod.ts";
let config;
async function main() {
  config = "postgres://nxqqihptnjqsnc:e34f6039d2037afdae958f12f6e45d205c18e86ac59ee8c02b46777528b2a2e0@ec2-23-20-129-146.compute-1.amazonaws.com:5432/d42tdc5pqmbnov?ssl=true";
  const client = new Client(config);
  await client.connect();
  const result = await client.query("SELECT * FROM comments;");
  console.log(result.rows);
  await client.end();
}

main();