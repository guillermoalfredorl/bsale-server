import express from 'express';
import cors from 'cors';
import productRouter from '../routes/product.routes.js';

const expressApp = express();

//Middlewares
expressApp.use(express.json());
expressApp.use(cors());

expressApp.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes
expressApp.use('/product', productRouter);

export default expressApp;
