const knex = require("../knexfile");

const TABLA_USUARIOS = "usuarios";

exports.getAllUsers = async (req, res, next) => {
  let result;
  if (req.query.nombre) {
    result = await knex(TABLA_USUARIOS).where(
      "nombre",
      "like",
      `%${req.query.nombre}%`
    );
  } else {
    result = await knex(TABLA_USUARIOS).select();
  }

  res.json(result);
  next();
};

exports.getUser = async (req, res, next) => {
  //   const respuestaBd = await knex(TABLA_USUARIOS).where("id", req.params.id);
  const respuestaBd = await knex(TABLA_USUARIOS).where({ id: req.params.id });

  const usuario = respuestaBd[0];
  if (usuario) {
    res.status(201);
    res.json(respuestaBd[0]);
  } else {
    res.status(404);
    res.json({ mensaje: "no se encontró el usuario con ese id" });
  }
  next();
};

exports.createUser = async (req, res, next) => {
  try {
    const respuestaBd = await knex(TABLA_USUARIOS).insert(req.body, "*");
    res.status(201);
    res.json(respuestaBd[0]);
  } catch (e) {
    res.status(500);
    res.json(e);
  }
  next();
};
