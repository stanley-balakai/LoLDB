const express = require('express')

const router = express.Router()

// require controller
const mainCtrl = require('../controllers/main')

// Routes
router.get('/', mainCtrl.main_get)
router.get('/detail/:id', mainCtrl.champion_show_get)
router.post('/detail/:id', mainCtrl.comment_post)


// Exports to other files
module.exports = router