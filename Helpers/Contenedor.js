class Contenedor {
    constructor(archivo) {
       this.archivo = 'Productsdb';
    }

    async save(object) {
        object.id= this.productos.length + 1;
        this.productos.push(object) 
        return object
    }
    async getById(id){
        const productoBuscado = await productos.find(i => i.id === id)
        const error = {error : "producto no encontrado"}
        if(!productoBuscado){
            return error
        }else{
            return productoBuscado
        }
    }

    async delete(id){
        const productoBorrado = await this.productos.filter(i => i.id != id)
        this.producto = productoBorrado
    }

    update(id, obj){
       const index = this.productos.findIndex(p => p.id === id);

        obj[0].id= id
        this.productos[index]=obj[0]
       
          return this.productos[index];
        
    }

    getAll() {
        return (this.productos);
    }


}


module.exports = Contenedor;