const express = require('express');
const render = require('../react-app/dist/bundle.server.js');
const template = require('../react-app/template.js')

console.log('test');

console.log(render)

const app = express();

app.get('/', (req, res) => {
	const { html } = render()
	const response = template("Server Rendered Page", {}, html)
	res.setHeader('Cache-Control', 'assets, max-age=604800')
	res.send(response);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000');
});