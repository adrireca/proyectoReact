import React, { useContext, useState } from 'react';
import { contextData } from '../context/ContextProvider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export const ConfirmCourtEdit = () => {

    //Obtenemos todos los datos del contexto.
    const c = useContext(contextData);

    /* */
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        /* */
        const CourtEditModel = {
            luz: c.court.luz,
            cubierta: c.court.cubierta,
            disponible: c.court.disponible,
            precioPista: c.court.precioPista,
            precioLuz: c.court.precioLuz,
            tipoPista: c.court.tipoPista,
        }

        /* Se muestra el mensaje si se ha rellenado todo el formulario. */
        if (!Object.values(CourtEditModel).includes('')) {
            setOpen(true);
        }
        console.log(CourtEditModel);
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
                Editar pista
            </Button>
            {/* <button onClick={handleClick} id='boton' type="submit" className="btn btn-primary">Submit</button> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Pista modificada con éxito.
                </Alert>
            </Snackbar>
        </>
    )
}
