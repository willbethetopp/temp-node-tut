const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;

	readFile("./content/second.txt", "utf-8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		writeFile(
			"./content/result-async.txt",
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("done with this task");
			}
		);
	});
});

console.log("starting next task");

// const { readFile, writeFile } = require("fs").promises;

// const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// const start = async () => {
// 	try {
// 		const first = await readFile("./content/first.txt", "utf-8");
// 		const second = await readFile("./content/second.txt", "utf-8");
// 		await writeFile(
// 			"./content/result-mid-grenade.txt",
// 			`This is awesome: ${first} ${second}`,
// 			{
// 				flag: "a",
// 			}
// 		);
// 		console.log(first, second);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(path, "utf-8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// getText("./content/first.txt")
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error));

