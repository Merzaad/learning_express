import { createClient } from "redis";

import getRedis from "./get.mjs";
import postRedis from "./post.mjs";

const client = createClient({
  url: "redis://localhost:6379",
});

export { client, postRedis, getRedis };
