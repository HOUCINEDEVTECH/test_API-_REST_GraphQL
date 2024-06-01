const express = require('express');
const router = express.Router();
const Product = require('../models/product');

let products = [];

// CREATE: Ajouter un produit
router.post('/', (req, res) => {
    const product = new Product(
        req.body.id,
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.quantity
    );
    products.push(product);
    res.status(201).send(`Produit ajout� avec l'ID: ${product.id}`);
});

// READ: R�cup�rer tous les produits
router.get('/', (req, res) => {
    res.json(products);
});

// READ: R�cup�rer un produit par ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Produit non trouv�');
    }
});

// UPDATE: Mettre � jour un produit par ID
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    let productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products[productIndex] = updatedProduct;
        res.send(`Produit avec l'ID: ${productId} mis � jour`);
    } else {
        res.status(404).send('Produit non trouve');
    }
});

// DELETE: Supprimer un produit par ID
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    products = products.filter(p => p.id !== productId);
    res.send(`Produit avec l'ID: ${productId} supprim�`);
});

module.exports = router;