import { parentPort } from 'worker_threads'

parentPort.on('message', (msg) => console.log(msg.toString()))
