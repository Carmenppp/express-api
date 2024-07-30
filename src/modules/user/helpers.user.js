import { success, errorM } from '../../utils/statusManager.js';
import { all, deleteC, findOne, addItem, update } from './controller.user.js';

export const findAll = async (req, res, next) => {
    try {
        const items = await all()
        success(req, res, items);
    } catch (error) {
        next(error);
    }


};

export const findById = async (req, res, next) => {
    try {
        const items = await findOne(req.params.id)
        success(req, res, items);
    } catch (error) {
        next(error);
    }
};

export const add = async (req, res, next) => {
    let message;
    try {
        await addItem(req.body)
        if (req.body) {
            message = 'Item guaradao exitosamente';
        }
        success(req, res, message);
    } catch (error) {
        next(error);
    }
};

export const updateItem = async (req, res, next) => {
    let message;
    try {
        const body = req.body;
        const id = req.params.id;
        await update(body, id)
        if (body) {
            message = 'Item actualizado exitosamente';
        }
        success(req, res, message);
    } catch (error) {
        next(error);
    }
};

export const remove = async (req, res, next) => {
    try {
        await deleteC(req.params.id)
        success(req, res, 'Item eliminado exitosamente');
    } catch (error) {
        next(error);
    }
};