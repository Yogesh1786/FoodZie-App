const Product = require("../model/product.model")

const CreateProduct = ("", async (req,res) =>{
    const { title , price , description , image , quantity , categories} = req.body
    try {
        await Product.create({ title , price , description , image , quantity , categories})
        res.status(200).json({message:"Product Created Sucessfull"})
    } catch (error) {
        console.log("Creating Error",error.message)
        res.status(500).json({status : false, message: "Something went wrong."})
    }
})

const GetAllProducts = ("", async(req,res)=>{
    try {
        const products = await Product.find()

        return res.status(201).json({status:true, data:products})
    } catch (error) {
        console.log("error",error.message)
        return res.status(500).json({status:false, message:"Something went wrong."})
    }
})

module.exports = {
    CreateProduct,
    GetAllProducts
}
