/**
 * This is a practice of node-based server.
 *
 */

let http = require('http');
let url = require('url');

let start = (route) => {

    let onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world!');
        response.end();
    };

    http.createServer( onRequest ).listen(8888);

    console.log('Server sunning at http://127.0.0.1:8888');

}

exports.start = start;


