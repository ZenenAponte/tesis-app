const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: '4638',
    host: 'localhost',
    port: 5432,
    database:"contribuyente",
});


module.exports = pool;
