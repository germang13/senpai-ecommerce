const { checkSchema } = require("express-validator");
const knex = require("../../knexfile");

// Pongo las constantes para no tener que estar cambiando el mensaje si cambian los largos de los campos
const nameLengths = { min: 3, max: 100 };
const direccionLengths = { min: 10, max: 200 };

module.exports = checkSchema({
  nombre: {
    in: ["body"], //es to significa que el field 'nombre' se envia en el body de la request
    errorMessage: `Es requerido y el largo es entre ${nameLengths.min} y ${nameLengths.max} caracteres`,
    optional: false,
    isLength: {
      options: nameLengths,
    },
  },
  direccion: {
    in: ["body"],
    errorMessage: `El largo es entre  ${direccionLengths.min} y ${direccionLengths.max} caracteres`,
    optional: true,
    isLength: {
      options: direccionLengths,
    },
  },
  telefono: {
    in: ["body"],
    errorMessage: "Debe ser un numero de celular de 9 digitos sin +",
    isNumeric: true,
    optional: true,
    isLength: { options: { min: 9, max: 9 } },
  },
  email: {
    in: ["body"],
    errorMessage:
      "Es un campo requerido y deber terner el formato de un email (user@example.com)",
    isEmail: true,
    optional: false,
    custom: {
      options: async (value) => {
        const queryResponse = await knex("usuarios").where({
          email: value,
        });
        const user = queryResponse[0];
        if (user) {
          throw new Error("Ya existe un usuario con ese email");
        }
        return true;
      },
    },
  },
});
