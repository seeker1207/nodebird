const express = require('express');

const { Post, Image, User, Comment } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const posts = await Post.findAll({
    limit: 10,
    order: [['createdAt', 'DESC']],
    include: [{
      model: User,
      attributes: ['id', 'nickname'],
    }, {
      model: Image,
    }, {
      model: Comment,
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    }, {
      model: User,
      as: 'Likers',
      attributes: ['id'],
    }],
  });
  res.status(200).json(posts);
});

module.exports = router;
