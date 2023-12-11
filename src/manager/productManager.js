class ProductManager {
    static productList = [];
  
    static addProduct(product) {
      this.productList.push(product);
      io.emit('updateProducts', this.productList);
    }
  
    static deleteProduct(productId) {
      this.productList = this.productList.filter(product => product !== productId);
      io.emit('updateProducts', this.productList);
    }
  
    static getProducts() {
      return this.productList;
    }
  }
  
  module.exports = ProductManager;