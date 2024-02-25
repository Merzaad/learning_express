import { client } from "./index.mjs";

const post = async (key, value) => {
  try {
    await client.connect();
    await client.set(key, value);
  } catch (error) {
    throw new Error(error);
  } finally {
    await client.disconnect();
  }
};
export default post;
