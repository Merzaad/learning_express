import { createClient } from 'redis'

const getData = async (key) => {
  try {
    const client = createClient({
      url: 'redis://localhost:6379',
    })
    await client.connect()
    const result = await client.get(key)
    await client.disconnect()
    if (result !== null) return result
    else throw new Error(`${key}'s value is null`)
  } catch (error) {
    throw new Error(error)
  }
}
export default getData
