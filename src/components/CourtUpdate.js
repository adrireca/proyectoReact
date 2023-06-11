import React, { useContext, useEffect, useState } from 'react';
import { contextData } from '../context/ContextProvider';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { CourtCreate } from '../Exito/CourtCreate';

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
// import Button from '@mui/material/Button';
import { ConfirmCourtEdit } from '../snackbarConfirmations/ConfirmCourtEdit';
import { palette } from '../library/Library.js';
import Loading from './Loading';

export const CourtUpdate = () => {

  //Obtenemos todos los datos del contexto.
  const c = useContext(contextData);
  /* Si no hay token reedirige al login. */
  c.loginRedirect();

  /* */
  let { id } = useParams();
  // const [court, setCourt] = useState({
  //   id: null,
  //   luz: false,
  //   cubierta: false,
  //   disponible: false,
  //   precioPista: 0,
  //   precioLuz: 0,
  //   tipoPista: ''
  // });

  /* */
  const [errors, setErrors] = useState(null);

  /* */
  const redColor = palette.redColor;

  /* */
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getCourts();
  }, []);


  /* */
  const getCourts = () => {
    /* */
    setLoading(true);

    axiosClient.get(`/pistas/${id}`)
      .then(({ data }) => {
        /* */
        setLoading(false);

        c.setCourt(data);

      })
      .catch(() => {
        /* */
        setLoading(false)
      })
  }


  const updateCourt = (e) => {
    //Deshabilitamos el refresco al click del botón.
    e.preventDefault();

    /* */
    setLoading(true);

    axiosClient.put(`/pistas/${c.court.id}`, c.court)
      .then(() => {
        /* */
        // setLoading(false);

        // setNotification('User was successfully updated')
        c.navigate('/pistas');
      })
      .catch(err => {
        /* */
        setLoading(false);

        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }



  return (
    <React.Fragment>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            paddingTop: '100px',
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/*  */}
          {loading &&
            <Loading />
          }
          <Typography component="h2" variant="h5" className='titleFormEditCreate' >
            Introduce los datos de la pista:
          </Typography>
          <Box component="form" onSubmit={updateCourt} noValidate sx={{ mt: 3 }}>
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
                    checked={c.court.luz}
                    onChange={(e) => c.setCourt({ ...c.court, luz: e.target.checked })}
                  />
                  <FormControlLabel
                    required
                    control={<Switch />}
                    label="La pista está cubierta"
                    name='cubierta'
                    checked={c.court.cubierta}
                    onChange={(e) => c.setCourt({ ...c.court, cubierta: e.target.checked })}
                  />
                  <FormControlLabel
                    required
                    control={<Switch />}
                    label="La pista esta disponible"
                    name='disponible'
                    checked={c.court.disponible}
                    onChange={(e) => c.setCourt({ ...c.court, disponible: e.target.checked })}
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
                  value={c.court.precioPista}
                  onChange={(e) => c.setCourt({ ...c.court, precioPista: e.target.value })}
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
                  value={c.court.precioLuz}
                  onChange={(e) => c.setCourt({ ...c.court, precioLuz: e.target.value })}
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
                    value={c.court.tipoPista}
                    label="Tipo de pista"
                    onChange={(e) => c.setCourt({ ...c.court, tipoPista: e.target.value })}
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
            {/* Contiene el botón de enviar y el mensaje de éxito. */}
            {/*  */}
            <ConfirmCourtEdit />
            {/* <Button
              type="submit"
              variant="contained"
              className='btnSubmitForm'
              sx={{ mt: 3, mb: 2 }}
            >
              Editar pista
            </Button> */}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}
