const express = require( 'express' );       // Importamos express
const app = express();                      // Invocamos express
const cors = require( 'cors' ); 
const { dbConnection } = require( './config/mongo.config' );  // Importamos la configuracion de Mongoose para MongoDB
const PORT = process.env.PORT

app.use( express.json() );
app.use( cors() )

/** Definimos las rutas disponibles */

app.use( '/api', require( './routes/productos.routes' ) );       // -> http://localhost:4000/api/products
app.use( '/api', require( './routes/localidades.routes' ) ); 
app.use( '/api', require( './routes/evento.routes' ) );  // -> http://localhost:4000/api/eventos
app.use('/api', require('./routes/users.routes'));


// Invoca la configuracion de la base de datos para establecer la conexion
dbConnection();     

/** Lanzamos el servidor web */
app.listen( PORT, function() {
    console.log( `servidor corriendo en http://localhost:${PORT} ` );
});