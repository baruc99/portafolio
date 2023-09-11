// email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'barucgs@gmail.com', // Reemplaza con tu dirección de correo electrónico
    pass: 'Dinosaurio123.', // Reemplaza con tu contraseña
  },
});

module.exports = transporter;
