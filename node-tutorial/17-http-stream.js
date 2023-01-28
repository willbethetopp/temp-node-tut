const http = require("http");
const { createReadStream } = require("fs");

http
	.createServer((req, res) => {
		const text = createReadStream("./content/big-file.txt", "utf-8");
		// res.writeHead(200, { "Content-Type": "text/plain" });
		// text.on("data", (result) => {
		// 	res.end(result);
		// });

		text.on("open", () => {
			text.pipe(res);
		});

		text.on("error", (err) => {
			res.end(err);
		});
	})
	.listen(8000);
