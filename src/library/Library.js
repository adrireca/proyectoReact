import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/* Colores personalizados. */
const redColor = red[500];
const greenColor = green[500];


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
      return;
  }
};


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

/* */
const deleteSnackbar = () => {
  <Snackbar autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      Eliminada correctamente!
    </Alert>
  </Snackbar>
}


export {
  obtenerDatos,
  palette,
  deleteSnackbar,
};