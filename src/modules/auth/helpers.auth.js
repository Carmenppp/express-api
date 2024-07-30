import { success, errorM } from '../../utils/statusManager.js';
import { login } from './controller.auth.js';

export const loginUser = async (req, res, next) => {
    try {
        const token = await login(req.body.username, req.body.password)
        success(req, res, token);
    } catch (error) {
        next(error);
    }
};

