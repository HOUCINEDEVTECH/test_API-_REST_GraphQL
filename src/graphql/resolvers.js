const { Product, products } = require('../models/product');

const resolvers = {
  products: () => products,
  product: ({ id }) => products.find(product => product.id === id),
  addProduct: ({ id, name, description, price, quantity }) => {
    const newProduct = new Product(id, name, description, price, quantity);
    products.push(newProduct);
    return newProduct;
  },
  updateProduct: ({ id, name, description, price, quantity }) => {
    const product = products.find(product => product.id === id);
    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;
      return product;
    }
    throw new Error('Produit non trouvé');
  },
  deleteProduct: ({ id }) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      const [deletedProduct] = products.splice(index, 1);
      return deletedProduct;
    }
    throw new Error('Produit non trouvé');
  }
};

module.exports = resolvers;
