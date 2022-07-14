import express from 'express';
import { createProduct, deleteProduct, listDetail, listProduct, updateDelete } from '../controllers/products';
const route = express.Router();

route.get('/product', listProduct)
route.get('/product/:id',listDetail)
route.post('/product',createProduct)
route.delete('/product/:id', deleteProduct)
route.put('/product/:id', updateDelete)

export default route