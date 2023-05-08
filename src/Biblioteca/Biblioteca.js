import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';

/* Colores personalizados. */
const redColor = red[500];
const greenColor = green[500];



const obtenerDatos = (url) => {
  // Obtiene datos de la API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch(() => {
        return new Error("Ha habido un error.");
      })
  );
};

/* Colores personalizados. */
const palette = {
  redColor,
  greenColor,
}



export {
  obtenerDatos,
  palette,
};