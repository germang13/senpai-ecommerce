## Ecommerce-Senpai POC

### Pasos para crear una API en Express usando Knex

1.  `npm init` para crear nuestro nuevo proyecto en node.
2.  ` npm i express express-validator knex pg uuid` para instalar las depenencias
3.  `npm i -D nodemon` para instalar [nodemon](https://www.npmjs.com/package/nodemon)
4.  Agregar script `npm start: nodemon app.js` en el archivo `package.json`
5.  Crear archivo `app.js` en la raiz del proyecto
6.  Crear carpetas `middlewares` `routes` `controllers` `validators`
7.  Definir el `app.js` usando los middlewares globales que creamos estan en la capeta `middlewares` ademas de `app.use(express.json());`

#### Ahora vamos a crear manejar nuestras entidades

##### Para este ejemplo vamos a crear los archivos y el flujo para Usuarios

1. Crear archivo `users.router.js` `users.validators.js` `users.controller.js`
2. en `users.router` vamos a crear las rutas
3. importamos el `usersRouter` de `users.router` y lo agregamos a la seccion de rutas del `app.js`
4. Codeamos los archivos de `validators`, `controller`
5.
