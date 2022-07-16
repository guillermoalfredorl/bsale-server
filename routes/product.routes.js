import { Router } from 'express';

const productRouter = Router();

productRouter.get('/products');

export default productRouter;
