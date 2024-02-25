import { createClient } from "redis";

import get from "./get.mjs";
import set from "./set.mjs";

const client = createClient({
  url: "redis://localhost:6379",
});

export { client, set, get };
