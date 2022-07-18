import Category from "../models/category";
import Product from "../models/products";

export const listCategory = async (req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({message: "Khong the show category"})
    }
}
export const detailCategory = async (req,res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec()
        // const product = await Product.find({category}).select("-category").exec() //deny category in table product
        const product = await Product.find({category}).populate("category").exec()  //show detail category in table product
        res.json({category, product})
    } catch (error) {
        res.status(400).json({message: "Khong the show detail category"})
    }
}
export const createCategory = async (req, res) => {
    try {
        const category = await Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({message: "Can't create Category. Please, check again"})
    }
}
export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({message: "Can't update this category"})
    }
}
export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({message: "Can't delete this category"})
    }
}