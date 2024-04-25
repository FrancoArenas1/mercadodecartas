// ServiceProducto.js
class ServiceProducto {
    constructor() {
      this.productos = [{name: 'Liliana of the veil',
                     value: 10000,
                     status: 'NM',
                     edition: 'Innistrad',
                     imagen: 'productos/mtg/innistrad/1.jpg',
                     owner: 'Franco Arenas'
                        }, {name: 'Griselbrand',
                        value: 12000,
                        status: 'NM',
                        edition: 'Avacyn Restored',
                        imagen: 'productos/mtg/avacyn/1.jpg',
                        owner: 'Franco Arenas'
                           }];
    }
  
    getProductos() {
      return this.productos;
    }
  }