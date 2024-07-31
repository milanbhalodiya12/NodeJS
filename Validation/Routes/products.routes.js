const express = require('express')
const productController = require("./../controller/product.controller")
const studentValidator = require("./../studentValidator")

const router = express.Router();

router.get('/products', productController.index);
router.get('/products/:id', productController.show);
router.post('/products', studentValidator.createStudents, productController.store);
router.put('/products', productController.update);
router.delete('/products', productController.destroy);
module.exports = router;