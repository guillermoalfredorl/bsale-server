import express from 'express';
import cors from 'cors';
import productRouter from '../routes/product.routes.js';

const expressApp = express();

//Middlewares
expressApp.use(cors());

expressApp.use(
  express.urlencoded({
    extended: true,
  })
);

expressApp.use(express.json());

//Routes
expressApp.use('/products', productRouter);

export default expressApp;
