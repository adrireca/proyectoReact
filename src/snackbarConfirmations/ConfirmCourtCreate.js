import React, { useContext, useState } from 'react';
import { contextData } from '../context/ContextProvider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export const ConfirmCourtCreate = () => {

    //Obtenemos todos los datos del contexto.
    const c = useContext(contextData);

    /* */
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        /* */
        const CourtCreateModel = {
            luz: c.luz,
            cubierta: c.cubierta,
            disponible: c.disponible,
            precioPista: c.precioPista,
            precioLuz: c.precioLuz,
            tipoPista: c.tipoPista,
        }

        /* Se muestra el mensaje si se ha rellenado todo el formulario. */
        if (!Object.values(CourtCreateModel).includes('')) {
            setOpen(true);
        }
        console.log(CourtCreateModel);
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
                Crear pista
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
