const express = require('express');
const router = express.Router();

const redis = require('../redis');

router.get('/', async (req, res) => {
  const stats = await redis.getAsync('added_todos');
  if (stats === null) {
    await redis.setAsync('added_todos', 0);
  }
  res.json({added_todos: stats});
});

module.exports = router;