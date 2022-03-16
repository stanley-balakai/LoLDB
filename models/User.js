const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [1, "First name cannot be blank"],
        maxlength: [15, "First name cannot be longer than 15 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [1, "Last name cannot be blank"],
        maxlength: [15, "Last name cannot be longer than 15 characters"]
    },
    username: {
        type: String,
        required: true,
        minlength: [1, "username cannot be blank"],
        maxlength: [20, "username cannot be longer than 20 characters"]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "your password should be at least 6 chracters long"]
    }


    // userRole: {
        //type: String
        //enum: ["admin", "regular", "SuperAdmin"]
        // deafualt: "regular"
    //}


},

{
    timestamps: true
})

userSchema.methods.verifyPassword = function(password) {
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", userSchema)

module.exports = User;