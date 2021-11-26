Proyecto de Servidor  NodeJs con acceso a datos con MongoDB en el cual se realiza un Login con seguridad integrada al encriptar el password.

Dependencias requeridas (para instalarlas se utiliza npm install nombre_dependecia ejmp -> npm install express)
    "bcrypt-nodejs": "^0.0.3",
    "connect-flash": "^0.1.1",
    "ejs-mate": "^3.0.0",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "mongoose": "^6.0.13",
    "morgan": "^1.10.0",
    "passport": "^0.5.0",
    "passport-local": "^1.0.0"

Dependencias de desarrollo( npm install nodemon -D)
    "nodemon": "^2.0.15"

Script para inciar servidor 
     "dev": "nodemon src/index.js"

Es necesario iniciar proyecto de NodeJs con comando npm init -y