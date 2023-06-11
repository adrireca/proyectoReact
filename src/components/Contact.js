import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from "../axios-client.js";
import { contextData } from '../context/ContextProvider';
import { palette } from '../library/Library.js';

const theme = createTheme();

export const Contact = () => {
    /* Estados de los datos del formulario. */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // const { setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    /* */
    const c = useContext(contextData);

    /* */
    const redColor = palette.redColor;

    /* */
    const onSubmit = async (event) => {
        event.preventDefault();

        /* Modelo del formulario de contacto. */
        const RegisterContactModel = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
        }

        console.log(RegisterContactModel);

        /* */
        axiosClient.post('/contact', RegisterContactModel)
            .then(({ data }) => {
                console.log(data);

                /* Reedirige a la home. */
                c.navigate('/');

            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors)
                }
            })

    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        paddingTop: '100px',
                        paddingBottom: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contacta con nosotros
                    </Typography>
                    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
                        {/* Mensajes de error del formulario. */}
                        {errors &&
                            <Box className="alert">
                                {Object.keys(errors).map(key => (
                                    <Typography key={key} color={redColor} variant="body2" gutterBottom>{errors[key][0]}</Typography>
                                ))}
                            </Box>
                        }
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    label="Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    fullWidth
                                    label="Apellidos"
                                    name="last-name"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type='email'
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type='tel'
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    fullWidth
                                    name="tel"
                                    label="Teléfono"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type='textarea'
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    required
                                    fullWidth
                                    name="message"
                                    label="Mensaje"
                                    autoComplete="mensaje"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className='btnContact'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Enviar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to={"/login"} variant="body2" className='enlacesContact'>
                                    ¿Ya tienes una cuenta? Inicia sesión
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    )
}
