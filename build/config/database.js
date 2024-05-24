"use strict";
// import { Pool } from "pg";
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '123456',
//     port: 5432
// })
// export default pool;
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432,
});
client.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
});
exports.default = client;
