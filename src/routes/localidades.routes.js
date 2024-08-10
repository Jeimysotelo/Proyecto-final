const { Router } = require( 'express' );
const { obtenerlocalidades, obtenerlocalidadporid, crearlocalidad, eliminarlocalidad, actualizarlocalidad } = require('../controllers/localidades.controller');

const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/localidades', obtenerlocalidades );
router.get( '/localidades/:id', obtenerlocalidadporid );
router.post( '/localidades',  crearlocalidad);
router.patch( '/localidades/:id',  actualizarlocalidad);
router.delete( '/localidades/:id',eliminarlocalidad  );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion