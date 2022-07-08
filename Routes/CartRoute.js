const { Router } = require('express');
const router = Router();

const { newCart, deleteCart, getCartProducts, addProductsInCart, deleteProductFromCart } = require('../Controllers/CartController');

router.get('/', newCart);
router.delete('/:id', deleteCart);
router.get('/:id/productos', getCartProducts);
router.post('/:id/productos', addProductsInCart);
router.delete('/:id/productos/:id_prod', deleteProductFromCart);




module.exports = router; 