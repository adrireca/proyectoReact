import * as React from 'react';
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
// import { transporter } from '../nodemailer-service';
// import axios from 'axios';
// import axiosClient from "../axios-client.js";
// import { useStateContext } from "../context/ContextProvider.jsx";

const theme = createTheme();

export const Contact = () => {
    /* Estados de los datos del formulario. */
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');

    // const { setUser, setToken } = useStateContext();
    // const [errors, setErrors] = React.useState(null);

    /* Modelo del login. */
    const RegisterUserModel = {
        firstName,
        lastName,
        email,
        phone,
        message
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        console.log(RegisterUserModel);

        // try {
        //     // send mail with defined transport object
        //     await transporter.sendMail({
        //         from: '"Fred Foo 👻" <foo@example.com>', // sender address
        //         to: "bar@example.com, baz@example.com", // list of receivers
        //         subject: "Hello ✔", // Subject line
        //         text: "Hello world?", // plain text body
        //         html: "<b>Hello world?</b>", // html body
        //     });

        // } catch (error) {
        //     console.log(error.message());
        // }
    };


    return (
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
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contacta con nosotros
                    </Typography>
                    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='text'
                                    onChange={(e) => { setLastName(e.target.value) }}
                                    required
                                    fullWidth
                                    id="last-name"
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
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type='tel'
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    required
                                    fullWidth
                                    name="tel"
                                    label="Teléfono"
                                    id="phone"
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
                                    id="message"
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
