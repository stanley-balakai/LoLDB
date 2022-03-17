const moment = require('moment')

const Champion = require('../models/Champion').Champion

// const moment = require("moment")


exports.main_get = (req, res) => {
    Champion.find()
    .then(champions => {
        console.log(champions)
        res.render("home/main", {champions: champions})
    })
    .catch(err => {
        console.log(err);
    })
}
exports.champion_show_get = (req, res) => {
    // console.log(req.params.id)

    Champion.findById(req.params.id)
    .then(champion => {
        res.render("./home/detail", {champion})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.comment_post = (req, res) => {
    console.log(req.body);

}


