import { createClient } from 'redis'

import getData from './getData.mjs'
import setData from './setData.mjs'

const client = createClient({
  url: 'redis://localhost:6379',
})

export { client, setData, getData }
