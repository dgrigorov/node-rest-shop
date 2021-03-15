const express = require('express');
const router = express.Router();

// Handle incoming GET request to /orders 
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetch'
    });
});

router.post('/', (req, res) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    return res.status(201).json({
        message: 'Order wes created',
        order: order 
    });
});


router.delete('/:orderID', (req, res) => {
    res.status(200).json({
        message: 'You deleted an order with ID ' + req.params.orderId,
        orderID: req.params.orderId
    });
});

module.exports = router;