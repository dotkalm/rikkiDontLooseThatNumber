const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController')

router.get('/new', songController.showNew);
router.post('/', (req,res)=>console.log(req.body));

module.exports = router;