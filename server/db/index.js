const { Pool } = require("pg");
const user = require('../../env/config.js');

const pool = new Pool(user);

module.exports = pool;