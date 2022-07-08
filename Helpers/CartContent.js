const fs = require('fs');
const Contenedor = require('./Contenedor');
const aProducts = new Contenedor();


class Compras{
    constructor(archivo){
        this.archivo = "dbCompras";
    }
    async newCart () {
        const id = await import('nanoid').then(module =>{ return module.nanoid(5)});
        let cartlist = JSON.parse(await fs.promises.readFile('../db/Cartdb', 'utf-8'));
        const newCart = {id: id, timestamp: new Date().toLocaleString("fr-FR"), products: []};
        cartlist.push(newCart);
        await fs.promises.writeFile('../db/Cartdb', JSON.stringify(cartlist));
        return id;
    }


    async deleteOneCart (idCart) {
        let cartlist = JSON.parse(await fs.promises.readFile('../db/Cartdb', 'utf-8'));
        const findedIndex = cartlist.findIndex((cart) => {
            return cart.id === idCart;
        });
        let resultado = '';
        if (findedIndex >= 0){
            cartlist.splice(findedIndex, 1);
            await fs.promises.writeFile('../db/Cartdb', JSON.stringify(cartlist));
            resultado = 'Producto eliminado';
        } else {
            resultado = 'No encontrado';
        }
        return resultado
    }


    async listProducts (idCart) {
        let cartlist = JSON.parse(await fs.promises.readFile('../db/Cartdb', 'utf-8'));
        const findedIndex = cartlist.findIndex((cart) => {
            return cart.id === idCart;
        });
        let resultado = '';
        if (findedIndex >= 0){
            resultado = cartlist[findedIndex].products;
        } else {
            resultado = 'cart no encontrado';
        }
        return resultado
    }


    async addProductToCart (idCart, idProducto) {
        let cartlist = JSON.parse(await fs.promises.readFile('../db/Cartdb', 'utf-8'));
        const findedIndex = cartlist.findIndex((cart) => {
            return cart.id === idCart;
        });
        let resultado = '';
        if (findedIndex >= 0){
            let productFromBase = await aProducts.getById(idProducto.id);
            if (!!productFromBase && productFromBase != 'Producto no encontrado'){
                cartlist[findedIndex].products.push(productFromBase);
                await fs.promises.writeFile('../db/Cartdb', JSON.stringify(cartlist));
                resultado = 'Producto agregado correctamente';
            } else {
                resultado = 'Ese producto no existe en el carrito';
            }
        } else {
            resultado = 'carrito no encontrado';
        }
        return resultado
    }

    async deleteOneFromCart (idCart, idProducto) {
        let cartlist = JSON.parse(await fs.promises.readFile('../db/Cartdb', 'utf-8'));
        const findedIndex = cartlist.findIndex((cart) => {
            return cart.id === idCart;
        });
        let resultado = '';
        if (findedIndex >= 0){
            const findedIndexProducto = cartlist[findedIndex].products.findIndex((producto) => {
                return producto.id == idProducto;
            });
            if (findedIndexProducto >= 0){
                cartlist[findedIndex].products.splice(findedIndexProducto, 1);
                await fs.promises.writeFile('../db/Cartdb', JSON.stringify(cartlist));
                resultado = 'Producto eliminado del carrito correctamente';
            } else {
                resultado = 'Ese producto no existe en el carrito';
            }
        } else {
            resultado = 'carrito no encontrado';
        }
        return resultado
    }
}

module.exports = Compras;