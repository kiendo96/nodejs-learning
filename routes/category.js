import express from "express";
import { createCategory, deleteCategory, detailCategory, listCategory, updateCategory } from "../controllers/category";
const route = express.Router()

route.get('/category', listCategory)
route.get('/category/:id', detailCategory)
route.post('/category', createCategory)
route.put('/category/:id', updateCategory)
route.delete('/category/:id', deleteCategory)

export default route