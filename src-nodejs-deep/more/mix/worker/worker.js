const { workerData, parentPort }
	= require('worker_threads')

console.log('Worker is proceessing ..  '
	+ workerData);

parentPort.postMessage(
	{ fileName: workerData, status: 'completed' }) 