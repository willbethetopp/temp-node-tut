// console.log("Hello Express");

const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;
	// home page
	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>Home page</h1>");
		res.end();
	}
	// about page
	else if (url === "/about") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("<h1>About page</h1>");
		res.end();
	}
	// 404
	else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write("<h1>Not Found</h1>");
		res.end();
	}
});

server.listen(5000);
