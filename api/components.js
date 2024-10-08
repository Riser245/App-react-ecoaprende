import * as contants from './contants'
// Función que maneja las peticiones fetch
export default async function fetchData(filename, action, form = null) {
    // URL base del servidor
    const SERVER_URL = contants.SERVER_URL;
    console.log(SERVER_URL);
    // Opciones para la petición fetch
    const OPTIONS = {
        method: form ? 'POST' : 'GET', // Usa POST si se proporciona un formulario, de lo contrario usa GET
        ...(form && { body: form }) // Añade el cuerpo si se proporciona un formulario
    };
    console.log(OPTIONS);
    try {
        // Construcción de la URL con los parámetros necesarios
        const PATH = new URL(SERVER_URL + filename);
        PATH.searchParams.append('action', action);
        console.log(PATH);
        // Realización de la petición fetch
        const RESPONSE = await fetch(PATH.href, OPTIONS);
        // Verificación del estado de la respuesta
        if (!RESPONSE.ok) {
            throw new Error(`HTTP error! status: ${RESPONSE.status}`);
        }

        // Parseo del JSON de la respuesta
        const DATA = await RESPONSE.json();
        console.log('RESPONSE: ', DATA);
        return DATA;

    } catch (error) {
        console.log('Fetch error:', error);
        throw error; // Lanza el error para que useEffect pueda manejarlo
    }
};