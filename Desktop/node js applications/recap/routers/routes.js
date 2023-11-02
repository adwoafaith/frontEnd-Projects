const express = require('express')
const router = express.Router();
const data = require('../controllers/data')

router.route('/product').get(data.getProducts);
router.route('/product/static').get(data.getStaticProducts);

module.exports = router;