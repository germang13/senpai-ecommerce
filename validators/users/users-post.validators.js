const { checkSchema } = require("express-validator");

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
      options: (value) => {
        const exists = false; // consultar en la base de datos si hay un usuario con ese email
        if (exists) {
          throw new Error("Ya existe un usuario con ese email");
        }
        return true;
      },
    },
  },
});
