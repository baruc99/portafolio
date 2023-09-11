import nextConnect from "next-connect";
import { GET, POST } from './route'; // Asegúrate de importar las funciones correctamente

const handler = nextConnect();

handler.get(GET); // Asigna la función GET a una ruta GET
handler.post(POST); // Asigna la función POST a una ruta POST

export default handler;
