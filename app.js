const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, () => console.log('Esto fue exitoso'));

const publicPath = path.resolve(__dirname + '/public');
app.use(express.static(publicPath));

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/register', function(req, res) {
	res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/login', function(req, res) {
	res.sendFile(path.resolve(__dirname, './views/login.html'))
});