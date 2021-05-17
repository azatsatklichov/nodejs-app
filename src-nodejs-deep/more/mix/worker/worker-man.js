const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
	//throw new Error('Its not a worker');
	const worker = new Worker(__filename, { workerData: { a: 5 } });
	worker.once('message', (result) => {
		const start = new Date();
		console.log('square of 5 is :', result);
		
		let x = Math.floor(Math.random() * 10) + 1;
		heavySum(x);
		printElapseTime(start);
	})
} else {
	parentPort.postMessage(workerData.a * workerData.a)
}



const heavySum = (s) => {
	let sum = (Math.floor(Math.random() * 10) + s) * 1000;
	for (let i = 0; i < 2147483647; i++) {
		sum += i;
	};
	console.log(sum);
};


function printElapseTime(start) {
	var end = new Date() - start
	console.info('Elapsed time: %dms', end)
}
