import { parentPort } from 'worker_threads';
const collection = [];
for (let i = 0; i < 10; i += 1) {
 collection[i] = i;
}
parentPort.postMessage(collection);