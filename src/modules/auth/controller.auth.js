import { getAll, getOne, add, query} from "../../db/mysql.js";
import bcrypt from 'bcrypt';
import { tokenManager } from "../../tokenManager/index.js";
const table = 'auth';

export const login = async (username, password) => {
    const data = await query(table, { username: username });

    return bcrypt.compare(password, data.password)
        .then(result => {
            if (result === true) {
                //Generar token
                return tokenManager({...data})
            } else {
                throw new Error('Informacion invalida');
            }
        })
}

export const authAdd = async (data) => {
    const authData = {
        id: data.id
    }

    if (data.username) {
        authData.username = data.username
    }

    if (data.password) {
        authData.password = await bcrypt.hash(data.password.toString(), 5);
    }
    return add(table, authData)
}
