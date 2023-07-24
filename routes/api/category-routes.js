const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // include: [Product]
    }).catch((err) => {
      res.json(err);
    });
    if (!categoryData) {
      res.status(404).json({
        message: 'No categories found!',
      });
    }
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500);
  }
});
  

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // include: [Product]
    }).catch((err) => {
      res.json(err);
    });
    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json({message: 'Error getting category!'});
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create({
      category_name: req.body.category_name});
    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(201).json({message: 'Category created!'},);
  } catch(err) {
    res.status(500).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(201).json({message: `Category ${req.params.id} updated!`});
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData && !categoryUpdate) {
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(201).json({message: `Category ${req.params.id} deleted!`});
  } catch(err) {
    res.status(500).json({message: 'Error deleting category!'});
  }
});

module.exports = router;
