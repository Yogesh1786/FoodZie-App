const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    image:String,
    quantity:Number,
    categories:String
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("product",productSchema)