const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product]
    }).catch((err) => {
      res.json(err);
    });
    if (!tagData) {
      res.status(404).json({
        message: 'No tags found!',
      });
    }
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json({message: 'Error getting tags!'});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product]
    }).catch((err) => {
      res.json(err);
    });
    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json({message: 'Error getting tag!'});
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name});
    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
    res.status(201).json({message: 'Tag created!'},);
  } catch(err) {
    res.status(500).json({message: 'Error creating tag!'});
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name},
      {where: {id: req.params.id}});
    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
    res.status(201).json({message: 'Tag updated!'},);
  } catch(err) {
    res.status(500).json({message: 'Error updating tag!'});
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = Tag.destroy({where: {id: req.params.id}});
    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
    res.status(201).json({message: 'Tag deleted!'},);
  } catch(err) {
    res.status(500).json({message: 'Error deleting tag!'});
  }
});

module.exports = router;
