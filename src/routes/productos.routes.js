const { Router } = require( 'express' );
const { getproductos, createproductos, getproductosById, removeproductosById, updateproductosById } = require( '../controllers/productos.controller' );
const router = Router();

/** Definir las rutas para la entidad 'Categoria' */
// http://localhost:4000/api/categories
router.get( '/products', getproductos );
router.get( '/products/:id', getproductosById );
router.post( '/products', createproductos );
router.patch( '/products/:id', updateproductosById );
router.delete( '/products/:id', removeproductosById );


module.exports = router;        // Exportar todas las rutas definidas, para que queden disponibles en toda la aplicacion