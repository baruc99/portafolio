// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Reemplaza 'tudominio.com' con tu dominio
    port: 465, // El puerto SMTP de Hostinger generalmente es 587
    secure: true, // Puede ser false en la mayoría de los casos
    // service: 'Gmail', // Cambia esto a tu proveedor de correo
    auth: {
        user: 'contact@boxcode.dev', // Tu dirección de correo electrónico
        pass: 'EU0tiThb5c.', // Tu contraseña
    },
});

export async function POST(req) {
    try {
        const data = await req.json()
        console.log(data);
        const { nombre, correo, idea, proyecto } = data;

        

        const mailOptions = {
            from: 'contact@boxcode.dev',
            to: 'barucgs@gmail.com', // Cambia esto al destinatario deseado
            subject: 'Nuevo mensaje desde el formulario de contacto',
            text: `
          Nombre: ${nombre}
          Correo: ${correo}
          Idea: ${idea}
          Proyecto: ${proyecto}
        `,
        };


        await transporter.sendMail(mailOptions)


        console.log('Correo enviado con éxito api');
        return NextResponse.json({ color: 'primary', msg: 'Te informo que el correo ha sido enviado correctamente. Nos pondremos en contacto contigo a la brevedad.', data });
    } catch (error) {
        console.error('Error al enviar el correo: api', error);
        return NextResponse.json({ color: 'danger', msg: 'Lo sentimos, no se pudo enviar su correo electrónico en este momento. Por favor, inténtelo de nuevo más tarde.', error });
    }

}
