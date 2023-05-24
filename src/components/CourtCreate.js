import React, { useContext, useState } from 'react';
import { contextData } from '../context/ContextProvider';
// import axios from 'axios';
import { ConfirmCourtCreate } from '../snackbarConfirmations/ConfirmCourtCreate';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axiosClient from "../axios-client.js";
import { palette } from '../library/Library.js';
import Loading from './Loading';
// import Button from '@mui/material/Button';


export const CourtCreate = () => {

    /* Importa los datos del contexto. */
    const c = useContext(contextData);

    /* Si no hay token reedirige al login. */
    c.loginRedirect();

    /* */
    const [errors, setErrors] = useState(null);

    /* */
    const redColor = palette.redColor;

    /* */
    const [loading, setLoading] = useState(false);


    /* Guarda una pista */
    const onSubmit = async (e) => {
        //Deshabilitamos el refresco al click del botón.
        e.preventDefault();

        /* */
        setLoading(true);

        const CourtCreateModel = {
            luz: c.luz,
            cubierta: c.cubierta,
            disponible: c.disponible,
            precioPista: c.precioPista,
            precioLuz: c.precioLuz,
            tipoPista: c.tipoPista,
        }

        axiosClient.post('/pistas', CourtCreateModel)
            .then(({ data }) => {
                /* */
                setLoading(false);

                /* Vaciamos los campos del formulario. */
                resetFormField();

                /* Reedirige a pistas. */
                c.navigate('/pistas');
            })
            .catch(err => {
                /* */
                setLoading(false);

                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            });

    };

    /* Rsetea los campos del formulario. */
    const resetFormField = () => {
        c.setLuz(false);
        c.setCubierta(false);
        c.setDisponible(false);
        c.setPrecioLuz(0);
        c.setPrecioPista(0);
        c.setTipoPista('');
    }


    return (

        <React.Fragment>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        paddingTop: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {loading &&
                        <Loading />
                    }
                    <Typography component="h2" variant="h5" className='titleFormEditCreate' >
                        Introduce los datos de la pista:
                    </Typography>
                    
                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 3 }}>
                        {/* Mensajes de error del formulario. */}
                        {errors &&
                            <Box className="alert">
                                {Object.keys(errors).map(key => (
                                    <Typography key={key} color={redColor} variant="body2" gutterBottom>{errors[key][0]}</Typography>
                                ))}
                            </Box>
                        }
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormGroup>
                                    <FormControlLabel
                                        required
                                        control={<Switch />} label="La pista tiene luz"
                                        name='luz'
                                        onChange={(e) => c.setLuz(e.target.checked)}
                                    />
                                    <FormControlLabel
                                        required
                                        control={<Switch />}
                                        label="La pista está cubierta"
                                        name='cubierta'
                                        onChange={(e) => c.setCubierta(e.target.checked)}
                                    />
                                    <FormControlLabel
                                        required
                                        control={<Switch />}
                                        label="La pista esta disponible"
                                        name='disponible'
                                        onChange={(e) => c.setDisponible(e.target.checked)}
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="inputPrecio"
                                    name="precioPista"
                                    label="Precio pista"
                                    type="number"
                                    required
                                    fullWidth
                                    value={c.precioPista}
                                    onChange={(e) => c.setPrecioPista(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="inputPrecio"
                                    name="precioLuz"
                                    label="Precio luz"
                                    type="number"
                                    required
                                    fullWidth
                                    value={c.precioLuz}
                                    onChange={(e) => c.setPrecioLuz(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="label-tipo-de-pista">Tipo pista</InputLabel>
                                    <Select
                                        labelId="label-tipo-de-pista"
                                        id="selectTipo"
                                        name="tipoPista"
                                        value={c.tipoPista.value}
                                        label="Tipo de pista"
                                        onChange={(e) => c.setTipoPista(e.target.value)}
                                        required
                                    >
                                        <MenuItem value={'tenis'}>Tenis</MenuItem>
                                        <MenuItem value={'padel'}>Pádel</MenuItem>
                                        <MenuItem value={'futbol'}>Fútbol</MenuItem>
                                        <MenuItem value={'futbolSala'}>Fútbol sala</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {/* Contiene el botón de enviar y el mensaje de confirmación. */}
                        <ConfirmCourtCreate />
                    </Box>
                </Box>
            </Container>

        </React.Fragment>
    )
}