const mongoose = require("mongoose");

const Signup = mongoose.model("signup", {
    name: { type: String, require: true }, email: { type: String, require: true, unique:true }, password: { type: String, require: true },
});
module.exports = { Signup };
