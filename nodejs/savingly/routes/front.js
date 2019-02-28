// Requirements
const path = require('path');
const express = require('express');
const router = express.Router();

// Controller
const frontController = require('../controllers/front');


// Set up the routes
router.get('/', frontController.getIndex);


// Export
module.exports = router;