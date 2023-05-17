import React, { useState, useContext, createRef } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
import axiosClient from "../axios-client.js";
import { datosContexto } from '../contextos/DatosProveedor';
import { palette } from '../Biblioteca/Biblioteca.js';

const theme = createTheme();


export const Signup = () => {

  /* Estados de los datos del formulario. */
  const [name, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // const nameRef = createRef()
  // const emailRef = createRef()
  // const passwordRef = createRef();
  // const passwordConfirmationRef = createRef();

  const c = useContext(datosContexto);
  const [errors, setErrors] = useState(null);

  /* */
  const redColor = palette.redColor;


  const onSubmit = event => {
    event.preventDefault();

    /* Modelo del signup. */
    const RegisterUserModel = {
      name: name,
      // lastName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    }

    /* Registra usuario. */
    axiosClient.post('/signup', RegisterUserModel)
      .then(({ data }) => {
        c.setUser(data.user)
        c.setToken(data.token);

        /* Si tiene éxito el registro, reedirige a la home. */
        if(data.user){
          c.navigate('/');
        }
        
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })

    console.log(RegisterUserModel);

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
            Registro
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
              <Grid item xs={12} sm={12}>
                <TextField
                  type='text'
                  // ref={nameRef}
                  onChange={(e) => { setFirstName(e.target.value) }}
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
                  onChange={(e) => { setEmail(e.target.value) }}
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
                  onChange={(e) => { setPassword(e.target.value) }}
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
                  onChange={(e) => { setPasswordConfirmation(e.target.value) }}
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
              Regístrate
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2" className='enlacesSignup'>
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
