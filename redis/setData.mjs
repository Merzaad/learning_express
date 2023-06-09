import { client } from './index.mjs'

const setData = async (key, value) => {
  try {
    await client.connect()
    await client.set(key, value)
  } catch (error) {
    console.log(error)
    throw new Error('post error')
  } finally {
    await client.disconnect()
  }
}
export default setData
