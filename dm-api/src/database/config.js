require('dotenv').config()

module.exports = {
    development: {
       dialect: 'mysql',
       host: process.env.DATABASE_HOST || 'localhost',
       port: 3306,
       username: process.env.DATABASE_USER || 'root',
       password: process.env.DATABASE_PASSWORD || '123456789',
       database: process.env.DATABASE_DB || 'device_management',
    },
    test: {
       dialect: 'sgbd',
       host: 'localhost',
       port: 1111,
       username: '',
       password: '',
       database: '',
    },
    production: {
       dialect: 'mysql',
       host: process.env.DATABASE_HOST,
       port: 3306,
       username: process.env.DATABASE_USER,
       password: process.env.DATABASE_PASSWORD,
       database: process.env.DATABASE_DB,
    },
};