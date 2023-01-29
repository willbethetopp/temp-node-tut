// console.log("Hello Express");

const { readFileSync } = require("fs");
const http = require("http");

// get all files
const homePage = readFileSync(require.resolve("./navbar-app/index.html"));
const homeStyles = readFileSync(require.resolve("./navbar-app/styles.css"));
const homeLogo = readFileSync(require.resolve("./navbar-app/logo.svg"));
const homeScript = readFileSync(require.resolve("./navbar-app/browser-app.js"));

const server = http.createServer((req, res) => {
	const url = req.url;
	console.log(url);
	// home page
	if (url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(homePage);
		res.end();
	}
	// home styles
	else if (url === "/styles.css") {
		res.writeHead(200, { "Content-Type": "text/css" });
		res.write(homeStyles);
		res.end();
	}
	// home logo
	else if (url === "/logo.svg") {
		res.writeHead(200, { "Content-Type": "image/svg+xml" });
		res.write(homeLogo);
		res.end();
	}
	// home script
	else if (url === "/browser-app.js") {
		res.writeHead(200, { "Content-Type": "text/javascript" });
		res.write(homeScript);
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
