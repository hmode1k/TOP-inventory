const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "yousef",
  database: "games_inventory",
  password: "yy123",
  port: 5432,
});
