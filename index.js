const express = require('express')
const app = express()
var robot = require("robotjs");

app.get('/left', (req, res) => {
	console.log(req.path)
	robot.keyTap("a")
	res.send('left')
})
app.get('/right', (req, res) => {
	console.log(req.path)
	robot.keyTap("d")
	res.send('right')
})
app.get('/up', (req, res) => {
	console.log(req.path)
	robot.keyTap("w")
	res.send("up")
})
app.get('/down', (req, res) => {
	console.log(req.path)
	robot.keyTap("s")
	res.send('down')
})
app.get('/start', (req, res) => {
	console.log(req.path)
	robot.keyTap("h")
	res.send('start')
})
app.get('/select', (req, res) => {
	console.log(req.path)
	robot.keyTap("g")
	res.send('select')
})
app.get('/a', (req, res) => {
	console.log(req.path)
	robot.keyTap("j")
	res.send('a')
})
app.get('/b', (req, res) => {
	console.log(req.path)
	robot.keyTap("k")
	res.send('b')
})

app.listen(3000, () => {
	console.log("Running")
})
