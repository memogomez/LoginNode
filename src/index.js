const app = require('./config/server.js');

require('./app/routes/usuarios')(app);

// Iniciar el server

app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
});