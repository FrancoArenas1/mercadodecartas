// ListProductos.js
class ListProductos {
    constructor(listProductos) {
      this.listProductos = listProductos;
      this.productos = [];
    }
  
    ngOnInit() {
      this.productos = this.listProductos.getProductos();
    }
  }