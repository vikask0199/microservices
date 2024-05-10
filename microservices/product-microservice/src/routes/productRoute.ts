import express from 'express';
import { getAllProducts, createProduct } from '../controllers/productController';

const router = express.Router();

router.get("/get-product", getAllProducts)
router.post("/create-product", createProduct)


export default router