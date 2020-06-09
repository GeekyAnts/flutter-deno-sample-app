import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const app = new Application();
let port: string|undefined = Deno.env.get("PORT");
let portnumber: number;
if(port!= undefined) {portnumber = +(port);
    app.use((ctx) => {
        ctx.response.body = "Hello World!";
      });
      await app.listen({ "port": portnumber});
}

