import { DBConfig, DBConfigResponse } from "./internal/r/db.ts";
import { connect, r } from "./mod.ts";

import { ReQLString } from "./internal/r/datum_primitives.ts";

const session = await connect({
  hostname: Deno.env.get("RETHINK_HOST") ?? 'localhost',
  port: 28015,
  username: Deno.env.get("RETHINK_USER"),
  password: Deno.env.get("RETHINK_PASSWORD"),
});

const text = function () {
  return 1 + 1;
};

const users = await r
  .add(1,1)
  // .db("test")
  // .table("test")
  // // .count()
  // // .run(session);
  // .status()
  .run(session);

console.log(users[0]);
