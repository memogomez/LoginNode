const res = require("express/lib/response");

module.exports = app =>{
    app.get('/', (req, res) =>{
        res.send('Hello world!!')
    });
}