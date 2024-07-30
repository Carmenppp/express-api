export const app = {
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASS || '',
    database: process.env.DB,
    jwt: {
        secret: process.env.JET_SECRET || 'secreto'
    }
};
