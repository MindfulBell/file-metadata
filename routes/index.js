var express = require('express');
var multer = require('multer');
var upload = multer()

module.exports = function(app){
	
	app.use(express.static(__dirname + '/../public'))

	app.get('/', function(req, res){
		res.sendFile('index.html');
	})

	app.post('/upload', upload.single('userFile'), function(req, res, next){
		res.json({ size: req.file.size + ' bytes' })
	})
}