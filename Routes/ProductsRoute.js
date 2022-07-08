const { Router } = require('express');
const router = Router();
//imports
const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require('../Controllers/ProductsController');
const { isAdmin} = require('../Middleware/middleware');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', isAdmin, postProduct);
router.put('/:id', isAdmin, updateProduct);
router.delete('/:id', isAdmin, deleteProduct);

module.exports = router; 