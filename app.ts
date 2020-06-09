import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const app = new Application();
config();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});
await app.listen({ port: 8000});