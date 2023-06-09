import { client } from './index.mjs'

const getData = async (key) => {
  try {
    await client.connect()
    const result = await client.get(key)
    if (result !== null) return result
    else throw new Error(`${key}'s value is null`)
  } catch (error) {
    throw new Error(error)
  } finally {
    await client.disconnect()
  }
}
export default getData
