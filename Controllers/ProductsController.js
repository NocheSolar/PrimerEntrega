const Contenedor = require('../Helpers/Contenedor');
const archivo = new Contenedor();

const getProducts = (req, res) => {
    try {
        archivo.getAll().then(resultado =>{
            res.send(resultado);
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
}
const getProduct = (req, res) => {
    try {
        archivo.getById(req.params.id).then(resultado =>{
            res.send(resultado)
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
const postProduct = (req, res) => {
    try {
        archivo.save(req.body);
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}
const updateProduct = (req, res) => {
    try {
        archivo.update(req.params.id, req.body).then(resultado => {
            res.send(resultado);
        })
    } catch (error) {
        console.log( error)
        res.sendStatus(500);
    }
}
const deleteProduct = (req, res) => {
    try {
        archivo.delete(req.params.id).then(resultado => {
            res.send(resultado);
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

//export
module.exports = { getProducts, getProduct, postProduct, updateProduct, deleteProduct };