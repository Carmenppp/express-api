import express from 'express';
import morgan from 'morgan';
import "dotenv/config";
import routerProducts from './modules/products/routes.products.js';
import routerUser from './modules/user/routes.user.js';
import auth from './modules/auth/routes.auth.js';

import { errors } from './utils/errors.js';


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/products', routerProducts);
app.use('/api/user', routerUser);
app.use('/api/auth', auth);
app.use(errors)


export default app;

