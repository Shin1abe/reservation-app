const express = require('express')
const router = express.Router()
const Product = require('../model/product')
const UserCtrl = require('../controllers/user')

router.get('/secret', UserCtrl.authMiddleware, function (req, res) {
    return res.json({"secret" : true})
})

router.get('', function (req, res) {
    Product.find({}, function (err, foundProducts) {
        if (err) { console.log(err) }
        return res.json(foundProducts)
    })
})

router.get('/:product_id', UserCtrl.authMiddleware, function (req, res) {
    const productid = req.params.product_id
    Product.findById(productid, function (err, foundProduct) {
        if (err) {
            return res.status(422).send({
                errors: [
                    {
                        title: 'Product Error',
                        detail: 'Product not Found'
                    }
                ]
            })
        }
        return res.json(foundProduct)
    })
})

module.exports = router