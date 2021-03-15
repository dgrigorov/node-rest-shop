const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    return res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product 
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id: id
        });
    }
});

router.patch('/:productId', (req, res) => {
    res.status(200).json({
        message: 'You updated a product with ID ' + id,
        id: req.params.productId
    });
});

router.delete('/:productId', (req, res) => {
    res.status(200).json({
        message: 'You deleted a product with ID ' + req.params.productId
    });
});

module.exports = router;