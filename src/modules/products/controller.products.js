import { getAll, getOne, add, deleteMethod, updateItem } from "../../db/mysql.js";

const table = 'products';

export const all = () => {
    return getAll(table)
}

export const findOne = (id) => {
    return getOne(table, id)
}

export const addItem = (body) => {
    return add(table, body)
}

export const update = (body, id) => {
    return updateItem(table, body, id)
}
export const deleteC = (id) => {
    return deleteMethod(table, id)
}