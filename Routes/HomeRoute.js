const { Router } = require('express');
const router = Router();
const cartRoutes = require('./CartRoute');
const productsRoutes = require('./ProductsRoute');
const path = require('path');

router.get('/home', (req, res) => {
    try {
        res.send('Home')
    } catch (error) {
        console.log('Hubo un error', error)
        res.sendStatus(500).send('Internal server error')
    }
})

router.use('/products', productsRoutes);
router.use('/cart/', cartRoutes);


module.exports = router;