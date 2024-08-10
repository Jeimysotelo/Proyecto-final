const { Router } = require( 'express' );
const { getEventos, getEventoById, createEvento, updateEventoById, removeEventoById } = require('../controllers/evento.controller');
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/eventos', getEventos );
router.get( '/eventos/:id', getEventoById );
router.post( '/eventos', createEvento );
router.patch( '/eventos/:id', updateEventoById );
router.delete( '/eventos/:id', removeEventoById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion