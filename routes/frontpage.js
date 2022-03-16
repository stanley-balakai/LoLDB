const express = require('express')

const router = express.Router()

// require controller
const frontpageCtrl = require('../controllers/frontpage')

// Routes
router.get('/', frontpageCtrl.frontpage_get)


// Exports to other files
module.exports = router