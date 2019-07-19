const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController')

router.get('/new', songController.showNew);

module.exports = router;