import React, { useContext } from 'react';
import { contextData } from '../context/ContextProvider';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { palette } from '../library/Library.js';

const theme = createTheme();

export const UserForm = () => {
    /* Utiliza los parámetros de la ruta padre. */
    let { id } = useParams();
    /* Datos del contexto. */
    const c = useContext(contextData);
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    /* */
  const redColor = palette.redColor;

    // if (id) {
    useEffect(() => {
        setLoading(true)
        axiosClient.get(`/users/${id}`)
            .then(({ data }) => {
                setLoading(false)
                setUser(data)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [])
    // }


    const onSubmit = ev => {
        ev.preventDefault()
        if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
                .then(() => {
                    // setNotification('User was successfully updated')
                    c.navigate('/users')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        } else {
            axiosClient.post('/users', user)
                .then(() => {
                    // setNotification('User was successfully created')
                    c.navigate('/users')
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors)
                    }
                })
        }
    }

    return (
        <>
            <ThemeProvider theme={theme}>
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
                        {user.id && <Typography component="h1" variant="h5">Actualizar usuario: {user.name}</Typography>}
                        {!user.id && <Typography component="h1" variant="h5">Nuevo usuario</Typography>}
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
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        type='text'
                                        // ref={nameRef}
                                        value={user.name}
                                        onChange={ev => setUser({ ...user, name: ev.target.value })}
                                        autoComplete="given-name"
                                        // name="name"
                                        required
                                        fullWidth
                                        // id="firstName"
                                        label="Nombre"
                                        autoFocus
                                    />
                                </Grid>
                                {/* <Grid item xs={12} sm={6}>
                <TextField
                  type='text'
                  onChange={(e) => { setLastName(e.target.value) }}
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
                                <Grid item xs={12}>
                                    <TextField
                                        type='email'
                                        // ref={emailRef}
                                        value={user.email}
                                        onChange={ev => setUser({ ...user, email: ev.target.value })}
                                        required
                                        fullWidth
                                        // id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='password'
                                        // ref={passwordRef}
                                        onChange={ev => setUser({ ...user, password: ev.target.value })}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Contraseña"
                                        // id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='password'
                                        // ref={passwordConfirmationRef}
                                        onChange={ev => setUser({ ...user, password_confirmation: ev.target.value })}
                                        required
                                        fullWidth
                                        name="passwordConfirmation"
                                        label="Repite la contraseña"
                                        // id="passwordConfirmation"
                                        autoComplete="repeat-password"
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                />
              </Grid> */}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className='btnSignup'
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}
