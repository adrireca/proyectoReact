import React, { useContext } from 'react';
import { datosContexto } from '../contextos/DatosProveedor';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export const Exito = () => {

    //Obtenemos todos los datos del contexto.
    const contexto = useContext(datosContexto);

    /* */
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        /* Se muestra el mensaje si se ha rellenado todo el formulario. */
        if(contexto.precioLuz){
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            {/*  */}
            <button onClick={handleClick} id='boton' type="submit" className="btn btn-primary">Submit</button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Pista creada con éxito.
                </Alert>
            </Snackbar>
        </>
    )
}
