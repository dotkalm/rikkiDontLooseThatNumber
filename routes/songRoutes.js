const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController')

router.get('/', songController.index);

router.get('/new', songController.showNew);
router.post('/', songController.create);

module.exports = router;