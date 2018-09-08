const express = require('express');
const router = express.Router();

const Products = require('../../models/Product');

//@route    GET api/products
//@desc     Get all products
//@access   Public

router.get('/', async (req, res) => {
  const products = await Products.find({});
  res.json({ products });
});


//@route    POST api/products
//@desc     Create an product
//@access   Public 
router.post('/', (req, res) => {
    const newProduct = new Products({
        name: req.body.name,
        price: req.body.price,
        photo: req.body.photo
    });

    newProduct.save().then(product => res.json(product));
});

//@route    DELETE api/products/:id
//@desc     Delete an product
//@access   Public 
router.delete('/:id', (req, res) => {
    Products.findById(req.params.id)
        .then(product => product.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;

