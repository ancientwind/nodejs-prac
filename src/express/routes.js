module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello Express!');
    });
    app.get('/admin', (req, res) => {
        res.send('admin page');
    });
};