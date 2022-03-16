const express = require('express')

const router = express.Router()

// require controller
const mainCtrl = require('../controllers/main')

// Routes
router.get('/', mainCtrl.main_get)


// Exports to other files
module.exports = router