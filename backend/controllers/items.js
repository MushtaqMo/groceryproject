const Product = require("../models/product")


const getProducts = async (req,res) => {
    const items = await Product.find({})
    res.json({
        message: "all items",
        products:items
    })
}


const createProduct = async (req, res) => {
    try {
        const {text} = req.body

        const productObject = new Product({
            text
        })

        const newProduct = await productObject.save()

        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({
            error
        })
    }

}







const getProduct = async (req, res) => {
    try {
        const { id } = req.params
       
        const product = await product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}




const editProduct = async (req, res) => {
    try {
        const { id } = req.params
        const productItem = await Product.findByIdAndUpdate(id, req.body);

        res.status(200).json(productItem)
    } catch (error) {
        res.status(500).json({
            error
        })
    }


}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "successfully deleted todo"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }


}


module.exports = {
    getProducts,
    createProduct,
    getProduct,
    editProduct,
    deleteProduct,
}
