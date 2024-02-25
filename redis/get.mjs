import { client } from "./index.mjs";

const get = async (key) => {
  try {
    await client.connect();
    const result = await client.get(key);
    if (result !== null) return result;
    else throw new Error(`${key}'s value is null`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.disconnect();
  }
};
export default get;
