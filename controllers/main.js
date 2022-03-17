const moment = require('moment')

const Champion = require('../models/Champion').Champion

// const moment = require("moment")


exports.main_get = (req, res) => {
    Champion.find()
    .then(champions => {
        // console.log(champions)
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

exports.comment_post = async (req, res) => {
    // console.log(req.body.comment);
    let champ = await Champion.findById(req.params.id)
    // console.log(champ)
    champ.comments.push(req.body.comment)
    await champ.save()
    res.redirect(`/main/detail/${champ._id}`)

}
exports.comment_delete = async (req, res) => {
    let champ = await Champion.findById(req.params.id)
    // let commentIndex = champ.comments.findIndex((comment)=> {
    //     comment === req.params.comment
    // })

    champ.comments.splice(req.params.comment, 1)
    await champ.save()
    res.redirect(`/main/detail/${champ._id}`)
}


