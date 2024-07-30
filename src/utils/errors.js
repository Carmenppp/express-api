import { errorM } from "./statusManager.js";

export const errors = (err, req, res, next)=>{
    console.error('[err]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    errorM(req, res, message, status);
}