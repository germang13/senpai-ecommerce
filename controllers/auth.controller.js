const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../knexfile");

const secret = "mi secreto para firmar el jwt";
exports.secret = secret;
exports.register = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashContrasenia = await bcrypt.hash(req.body.contrasenia, salt);

  await knex("usuarios").insert({ ...req.body, contrasenia: hashContrasenia });

  sendToken(res, next, req.body.email, req.body.nombre);
};

exports.login = async (req, res, next) => {
  const { email, contrasenia } = req.body;

  const respuestaUsuarios = await knex("usuarios").where("email", email);
  const usuario = respuestaUsuarios[0];

  if (!usuario) {
    res.status(404).json({ mensje: "usuario/contraseña incorrecta" });
    next();
    return;
  }

  const contraseniaValida = await bcrypt.compare(
    contrasenia,
    usuario.contrasenia
  );

  if (!contraseniaValida) {
    res.status(404).json({ mensje: "usuario/contraseña incorrecta" });
    next();
    return;
  }

  sendToken(res, next, email, usuario.nombre);
};

const sendToken = (res, next, email, nombre) => {
  const token = jwt.sign({ email, nombre }, secret);
  res.json({ token });
  next();
};
