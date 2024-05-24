// import { Pool } from "pg";

// const pool = new Pool({

//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '123456',
//     port: 5432
// })

// export default pool;

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432,
})
client.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
});

export default client;