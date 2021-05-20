var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

app.set(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("home")
})
// app.get("")

app.listen(3000, () => {
	console.log("Server started")
}) 