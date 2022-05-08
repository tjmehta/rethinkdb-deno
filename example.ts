import { DBConfig, DBConfigResponse } from "./internal/r/db.ts";
import { connect, r } from "./mod.ts";

const session = await connect({
  hostname: Deno.env.get("RETHINK_HOST") ?? 'localhost',
  port: 28015,
  username: Deno.env.get("RETHINK_USER"),
  password: Deno.env.get("RETHINK_PASSWORD"),
});

const result = await r
  .add(0, 0)
  .run(session);

console.log(result);
