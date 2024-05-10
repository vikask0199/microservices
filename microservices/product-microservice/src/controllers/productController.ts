import { Request, Response } from 'express';
import { productService } from '../services/productService';
import { IProduct } from '../interfaces/Product';

export const getAllProducts = (req: Request, res: Response) => {
    productService.getAllProducts()
        .then((products: IProduct[]) => {
            res.json(products);
        })
        .catch((error: Error) => {
            console.error('Error fetching products:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        });
};

export const createProduct = (req: Request<any, any, { name: string, price: number }>, res: Response) => {
    const { name, price } = req.body;
    productService.createProduct(name, price)
        .then((product: IProduct) => {
            res.status(201).json({ success: true, message: 'Product created successfully', product });
        })
        .catch((error: Error) => {
            console.error('Error creating product:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        });
};
