let express = require('express');
let app = express();
let http = require('http');
let config = require('./config');

app.all('*', (request, response, next) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    next();
});

app.get('/', (request, response) => {
    response.end('Welcome to the homepage!');
});

app.get('/about', (request, response) => {
    response.end('Welcome to the about page!');
});

app.get('/hello/:who?', (req, res) => {
    if(req.params.who) {
        res.end('hello, ' + req.params.who);
    } else {
        res.end('hello guest');
    }
})

app.get('*', (request, response) => {
    response.end('404!');
});

http.createServer(app).listen(config.ip.port);