const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    buy: {
        type: String
    },
    token: {
        type: String
    },
    web: {
        type: String
    },
    road: {
        type:String
    },
    tax:{
        type: String
    },
    white: {
        type:String
    }
})

module.exports = mongoose.model("gravitybot" , schema)