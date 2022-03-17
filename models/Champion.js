const mongoose = require("mongoose")


const championSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        avatar: String,
        comments: [String]
    },

    {
        timestamps: true
    }
)

const Champion = mongoose.model("Champion", championSchema)

module.exports = {Champion};