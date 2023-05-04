import React, { useState, useContext } from 'react';
// import axios from 'axios';
import axiosClient from "../axios-client.js";
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
import { datosContexto } from '../contextos/DatosProveedor';
// import { useForm } from './useForm';

const theme = createTheme();

export const Signin = () => {

  /* Estados de los datos del formulario. */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Importa los datos del contexto.
  const contexto = useContext(datosContexto);
  const [message, setMessage] = useState(null);

  /* Modelo del login. */
  const LoginModel = {
    email,
    password
  }

  /* Recoge los datos del formulario. */
  const onSubmit = async (event) => {
    event.preventDefault();

    /* Guarda login. */
    // await axios.post('https://jsonplaceholder.typicode.com/users/', LoginModel)
    //             .then((response) => {

    //             }).catch(err => {
    //               console.log(err);
    //             });

    axiosClient.post('/login', LoginModel)
      .then(({ data }) => {
        contexto.setUser(data.user)
        contexto.setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })

    console.log(LoginModel);

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

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
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='btnSignin'
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className='enlacesSignin'>
                  ¿Olvidaste la contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" className='enlacesSignin'>
                  ¿No tienes una cuenta? Registrarse
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
