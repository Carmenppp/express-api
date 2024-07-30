import mysql from 'mysql2'
import { app } from '../config.js';

const dbConfig = {
    host: app.host,
    user: app.user,
    password: app.password,
    database: app.database
}

export let conn;

export const createCon = () => {
    conn = mysql.createConnection(dbConfig);

    conn.connect((err) => {
        if (err) {
            console.log(err)
            setTimeout(createCon, 200)
        } else {
            console.log('DB conectada')
        }
    })
    conn.on('error', err => {
        if (err.code === 'PROCOL_CONNECTION_LOST') {
            createCon();
        } else {
            throw err;
        }
    })
}

createCon();

export const getAll = (table) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${table}`, (err, result) => {
            return err ? reject(err) : resolve(result);
        })
    })
}

export const getOne = (table, id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, result) => {
            return err ? reject(err) : resolve(result);
        })
    })
}
const insert = (table, data) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            return err ? reject(err) : resolve({ id: result.insertId });
        })
    })
}

export const query = (table, quest) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${table} WHERE ?`, quest, (err, result) => {
            return err ? reject(err) : resolve(result[0]);
        })
    })
}



export const add = (table, data) => {
        return insert(table, data);
}

export const updateItem = (table, data, id) => {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], (err, result) => {
            return err ? reject(err) : resolve(result);
        })
    })
}
export const deleteMethod = (table, id) => {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${table} WHERE id= ${id} `, (err, result) => {
            return err ? reject(err) : resolve(result);
        })
    })
}