import React, { useContext } from 'react';
import { contextData } from '../context/ContextProvider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export const Exito = () => {

    //Obtenemos todos los datos del contexto.
    const c = useContext(contextData);

    /* */
    const [open, setOpen] = React.useState(false);
    const [btnText, setbtnText] = React.useState('Crear pista'); /* Pone un texto u otro si es crear o editar. */

    /* */
    // const pista = {
    //     luz: c.luz,
    //     cubierta: c.cubierta,
    //     disponible:c.disponible,
    //     precioPista:c.precioPista,
    //     precioLuz: c.precioLuz,
    //     tipoPista: c.tipoPista,
    // }

    const handleClick = () => {
        /* Se muestra el mensaje si se ha rellenado todo el formulario. */
        if (c.precioLuz) {
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
            <Button
                type="submit"
                variant="contained"
                onClick={handleClick}
                className='btnSubmitForm'
                sx={{ mt: 3, mb: 2 }}
            >
                {btnText}
            </Button>
            {/* <button onClick={handleClick} id='boton' type="submit" className="btn btn-primary">Submit</button> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Pista creada con éxito.
                </Alert>
            </Snackbar>
        </>
    )
}
