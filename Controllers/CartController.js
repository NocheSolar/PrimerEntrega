const Compras = require('../Helpers/CartContent');
const archivo = new Compras();

//funciones
const newCart = (req, res) => {
        archivo.createCart().
        then(resultado =>{
            res.send(resultado);
        })
        .catch(error =>{
            console.log(error);
            res.sendStatus(500);
        }) 
}
const deleteCart = (req, res) => {
    try {
        archivo.deleteOneCart(req.params.id).then(resultado => {
            res.send(resultado);
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
const getCartProducts = (req, res) => {
    try {
        archivo.listProducts(req.params.id).then(resultado =>{
            res.send(resultado);
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
const addProductsInCart = (req, res) => {
    try {
        archivo.addProductToCart(req.params.id, req.body).then(resultado => {
            res.send(resultado)
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
const deleteProductFromCart = (req, res) => {
    try {
        archivo.deleteOneFromCart(req.params.id, req.params.id_prod).then(resultado => {
            res.send(resultado);
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
//export
module.exports = { newCart, deleteCart, getCartProducts, addProductsInCart, deleteProductFromCart };