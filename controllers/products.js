import Product from '../models/products'

export const listProduct = async (req, res)=> {
    try {
        const prod = await Product.find({}).exec()
        res.json(prod)
    } catch (error) {
        res.status(400).json({message: "khong the show san pham"})
    }
}
export const listDetail = async (req, res) => {
    try {
        const prod = await Product.findOne({_id: req.params.id }).exec()
        res.json(prod)
    } catch (error) {
        res.status(400).json({message: "khong the show san pham"})
    }
}
export const createProduct = async (req,res) => {
    try {
        const prod = await Product(req.body).save()
        res.json(prod)
    } catch (err) {
        res.status(400).json({message: "Khong the them san pham"})
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const prod = await Product.findOneAndDelete({_id: req.params.id }).exec()
        res.json(prod)
    } catch (error) {
        res.status(400).json({message: "khong the xoa san pham"})
    }
}
export const updateDelete = async (req, res) => {
    try {
        const prod = await Product.findOneAndUpdate({_id: req.params.id }, req.body, {new: true} ).exec()
        res.json(prod)
    } catch (error) {
        res.status(400).json({message: "khong cap nhap duoc san pham"})
    }
}