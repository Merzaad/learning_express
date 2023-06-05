import { createClient } from 'redis'

const setData = async (key, value) => {
  try {
    const client = createClient({
      url: 'redis://localhost:6379',
    })
    await client.connect()
    await client.set(key, value)
    await client.disconnect()
  } catch (error) {
    throw new Error(error)
  }
}
export default setData
