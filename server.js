import './config/env.js';
import httpServer from './config/http.js';

const bootstrap = () => {
  httpServer.listen(process.env.PORT_DB, () => {
    console.log(`listening on port ${process.env.PORT_DB}`);
  });
};

bootstrap();

/* const express = require('express');
const cors = require('cors');

const controller = require('./controllers/controller.js');

const { searchCategory, searchProducts } = controller;

const expressApp = express();

expressApp.use(cors());

expressApp.use(
  express.urlencoded({
    extended: true,
  })
);

expressApp.use(express.json());

expressApp.get('/category', searchCategory);
expressApp.get('/products', searchProducts);

const port = process.env.PORT || 5000;

expressApp.listen(port, () => {
  console.log('listen on port ' + port);
});
 */
