import { createServer } from 'http'
import { fileURLToPath, parse } from 'url'
import { Worker } from 'worker_threads'
import { dirname } from 'path'
import sharp from 'sharp'

const currentFolder = dirname(fileURLToPath(import.meta.url))
const workerFileName = 'worker.js'

async function joinImages({ background, img }) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${currentFolder}/${workerFileName}`)

    worker.postMessage({ background, img })
    worker.once('message', resolve)
    worker.once('error', reject)
    worker.once('exit', code => {
      if (code !== 0) {
        return reject(new Error(`Thread ${worker.threadId} stopped with exit code ${code}`))
      }

      return console.log(`Thread ${worker.threadId} exited!`)
    })
  })
}

async function handler(req, res) {
  if (req.url.includes('joinImages')) {
    const { query: { background, img } } = parse(req.url, true)
    const result = await joinImages({ background, img })

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    return res.end(`<img width="100%" height="100%" src="data:image/jpeg;base64,${result}"/>`)
  }

  return res.end('ok')
}

createServer(handler)
  .listen(3000, () => console.log('Running on port 3000'))

