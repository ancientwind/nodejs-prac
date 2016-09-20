let express = require('express');
let app = express();
let routes = require('./routes');

const _PORT = 3000;

/**
 * use external routes to set app.
 */
routes(app);
app.listen(_PORT);

console.log('Server is running on port: ' + _PORT);