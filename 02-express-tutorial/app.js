const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log('You hit the resource home');
	res.send("Home Page");
});

app.get('/about', (req, res) => {
  console.log("You hit the resource about");
  res.send('About Page')
})

app.listen(5000, () => console.log("Server listening on port 50000"));

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
