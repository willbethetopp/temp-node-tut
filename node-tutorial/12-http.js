const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("This is homepage.");
	} else if (req.url === "/about") {
		res.end("This is page about");
	} else {
		res.end(`
    <h1>Ooppss!</h1>
    <p>You go to wrong url</p>
    <a href="/">Let's go back!</a>
    `);
	}
});

server.listen(5000);
