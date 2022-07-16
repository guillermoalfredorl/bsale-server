import { Router } from 'express';
import { searchProducts } from '../controllers/product.controller.js';
import { searchCategory } from '../controllers/category.controller.js';

const productRouter = Router();

productRouter.get('/category', searchCategory);
productRouter.get('/product', searchProducts);

export default productRouter;
