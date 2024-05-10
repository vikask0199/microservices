

import { IProduct } from '../interfaces/Product';
import Product from '../models/ProductSchema';


export const productService = {
    getAllProducts: (): Promise<IProduct[]> => {
        return Product.find().exec();
    },
    createProduct: (name: string, price: number): Promise<IProduct> => {
        const product = new Product({ name, price });
        return product.save();
    }
};
