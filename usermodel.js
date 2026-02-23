const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/chachavidhayak`);

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    username: String
})
//Schema is created to say what all we need. Let's say here what all we need in user , we need name username and email of user.

module.exports = mongoose.model("user", userSchema)
//model is created and needed for CRUD operations, without creating model we cant do crud operations

//hi there github