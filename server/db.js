const Pool = require('pg').Pool

const pool = new Pool ({
    user: 'postgres',
    password: 'amity',
    host: 'localhost',
    port: 5432,
    database: 'jwttutorial'
});

module.exports = pool;
