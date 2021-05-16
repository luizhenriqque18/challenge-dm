'use strict';

module.exports = {
    development: {
       dialect: 'mysql',
       host: 'localhost',
       port: 3306,
       username: 'root',
       password: '123456789',
       database: 'device-management',
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
       dialect: 'sgbd',
       host: 'localhost',
       port: 1111,
       username: '',
       password: '',
       database: '',
    },
};