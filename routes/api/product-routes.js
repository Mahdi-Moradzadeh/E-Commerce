const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  try{
    const productData = await Product.findAll({
      include: [Category, Tag]
    }).catch((err) => {
      res.json(err);
    });
    if (!productData) {
      res.status(404).json({
        message: 'No products found!',
      });
    }
    res.status(200).json(productData);
  } catch(err) {
    res.status(500).json({message: 'Error getting products!'});
  }
});

// get one product
router.get('/:id', async(req, res) => {
  // find a single product by its `id`
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, Tag]
    }).catch((err) => {
      res.json(err);
    });
    if (!productData) {
      res.status(404).json({message: 'No product found with this id!'});
      return;
    }
    res.status(200).json(productData);
  } catch(err) {
    res.status(500).json({message: 'Error getting product!'});
  }
});

// create new product
router.post('/', async (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try{
    const productData = await Product.create(req.body);
    if (!productData) {
      res.status(404).json({message: 'No product found with this id!'});
      return;
    }
    res.status(201).json({message: 'Product created!'},);
  } catch(err) {
    res.status(500).json({message: 'Error creating product!'});
  }
});

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try {
    const productData = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.json(err);
    });
    if (!productData) {
      res.status(404).json({message: 'No product found with this id!'});
    }
    res.status(200).json({message: 'Product updated!'});
  } catch(err) {
    res.status(500).json({message: 'Error updating product!'});
  }
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  try {
    const productData = Product.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((err) => {
      res.json(err);
    });
    if (!productData) {
      res.status(404).json({message: 'No product found with this id!'});
      return;
    }
    res.status(200).json({message: 'Product deleted!'});
  }
  catch(err) {
    res.status(500).json({message: 'Error deleting product!'});
  }
});

module.exports = router;
