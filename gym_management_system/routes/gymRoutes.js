const express = require('express');
const router = express.Router();
const { getGyms, addGym } = require('../controllers/gymController');

router.get('/', getGyms);
router.post('/', addGym);

module.exports = router;
