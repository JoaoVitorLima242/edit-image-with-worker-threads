import { createServer } from 'http'
import { parse } from 'url'

async function handler(req, res) {
  if (req.url.includes('joinImages')) {
    const { query: { background, img } } = parse(req.url, true)
    console.log({ background, img })

    return res.end('joinImages OK')
  }

  return res.end('ok')
}

createServer(handler)
  .listen(3000, () => console.log('Running on port 3000'))

