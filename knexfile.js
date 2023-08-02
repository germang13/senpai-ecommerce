// Estos valores van a cambiar segun la configuracion de cada BD
module.exports = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5433,
    user: "postgres",
    password: "1q2w3e*",
    database: "ecommerce_facturas",
  },
});
