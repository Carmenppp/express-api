import jwt from 'jsonwebtoken';
import { errorHandler } from '../middlewares/errorHandler.js';
import { app } from '../config.js';

const secret = app.jwt.secret;
export const tokenManager = (data) => {
    return jwt.sign(data, secret, { expiresIn: '1h' });
}

export const verifyToken = (token) => {
    return jwt.verify(token, secret);
}

export const checkToken = {
    confirmToken: function (req, id) {
        const decoded = decodeHeader(req);
    
        if (decoded.id !== id) {
            throw new Error('No posees autorizacion necesaria')
        }
    }
}

export const getToken = (authorization) => {
    if (!authorization) {
        throw new Error('No viene el token')
    }
    if (authorization.indexOf('Bearer') === -1) {
        throw new Error('Formato invalido')
    }

    let token = authorization.replace('Bearer ', '');

    return token;
}

export const decodeHeader = (req) => {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verifyToken(token);
  
    req.user = decoded;

    return decoded;
}