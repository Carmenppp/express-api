import { getAll, getOne, add, deleteMethod, updateItem } from "../../db/mysql.js";
import { authAdd } from "../auth/controller.auth.js";


const table = 'user';

export const all = () => {
    return getAll(table)
}

export const findOne = (id) => {
    return getOne(table, id)
}

export const addItem = async (body) => {
    const user = {
        name: body.name,
        active: body.active
    }
    const result = await add(table, user);
    const insertId = result.id;
    if (body.id) {
        insertId = result.body.id;
    } 
    
    let authRes = '';
    if (body.username || body.password) {
       authRes = await authAdd({
            id: insertId,
            username: body.username,
            password: body.password
        })
    }

    return authRes
}

export const update = (body, id) => {
    return updateItem(table, body, id)
}
export const deleteC = (id) => {
    return deleteMethod(table, id)
}