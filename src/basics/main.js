let server = require('./server-prac');

let route = require('./router');

server.start(route.route);

console.log(__filename);
console.log(__dirname);
