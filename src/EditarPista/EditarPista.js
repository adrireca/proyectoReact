import React, { useContext } from 'react';
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Exito } from '../Exito/Exito';

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

export const EditarPista = () => {

  //Obtenemos todos los datos del contexto.
  const contexto = useContext(datosContexto);

  //Hook navigate para reedirigir a otro lugar de la web.
  const navigate = useNavigate();

  const editar = (e) => {
    //Deshabilitamos el refresco al click del botón.
    e.preventDefault();

    try {

      /*
      Dentro del checkbox, en caso de on asignamos 1 al estado.
      De lo contrario, 0, que es lo que admite el campo boolean dentro la base de datos.
      */
      if (contexto.luz === 'on') {
        contexto.luz = 1;
      } else {
        contexto.luz = 0;
      }

      if (contexto.disponible === 'on') {
        contexto.disponible = 1;
      } else {
        contexto.disponible = 0;
      }

      if (contexto.cubierta === 'on') {
        contexto.cubierta = 1;
      } else {
        contexto.cubierta = 0;
      }

      //Recogemos todos los datos en el objeto.
      var data = JSON.stringify({
        "precioPista": contexto.precioPista,
        "Luz": contexto.luz,
        "precioLuz": contexto.precioLuz,
        "tipoPista": contexto.tipoPista,
        "cubierta": contexto.cubierta,
        "disponible": contexto.disponible
      });

      //Preparamos el objeto con los datos, la url a la api y la petición.
      var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:8090/api/pistas/${contexto.id}`,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'XSRF-TOKEN=eyJpdiI6Imhia2xsY0tPMnZWd0ZlWEpuaTcxbFE9PSIsInZhbHVlIjoibW1uWTZWQVpzN1NuRmkxVmJub1FJUGhsK25qdFp3bkRiRHdGT0lVNGlCWGF6VXJQbmNlSEFuRGMvcTVQQ1dEYTJhNFdsemNTNDg1V2Zwdkp3K2JucWVOcmtYeWxsajJZS1h4YjdPbTJWY1kyNlJaYXdLR1dxY2xkOGg1bmVFWm0iLCJtYWMiOiI2ZDQxZTA4ZGVkMWU5MDRlNjg3YWUwMTZmYmIxM2FkYzQ4OGQ5NmJlN2VkNzE4NDJiMDhhMTcyZDc1NzM1YjdhIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InpRUXk5T0d5ckVwUnlZNEhhNkpJSmc9PSIsInZhbHVlIjoiK1hzQVArNXpwbTg4VUxURXhEUVI5QUo4c2lISkVrWkdUUDk5MUMrbzgwVjlyOUljUkpQUm9WK0ZHbXVCR2x1UVlFY2c3a1gwbWVyZ2lvRCtIdWVUb3NJWHFxN1l4aXZDaTZ0aitUWXRMYkJ1UXVWUjR6ZGtuSTBZMEVROUNRSXIiLCJtYWMiOiJiN2NmMzgwMGU3MWVhZjJiYzJiYTg2NjRkM2MyZDVlOTI0MTgyMjczZjY5ZmYyMDYyNTU2YzU2Mjg4YmYwNjI4IiwidGFnIjoiIn0%3D'
        },
        data: data
      };

      //Petición put con axios.
      axios(config)
        .then(function (response) {

          //Reedirigimos a pistas al crear una pista.
          navigate("/pistas");

          //Vaciamos los campos del formulario.
          contexto.setPrecioLuz('');
          contexto.setPrecioPista('');
        })
        .catch(function (error) {
          console.log(error);
        });

    } catch (error) {
      console.log(error.message());
    }

  }

  return (
    <React.Fragment>
      {/* <div className="container-fluid py-5 bg-light m-0">
        <div className="w-50 m-auto">
          <div className="container px-5">
            <form onSubmit={editar}>
              <p className="lead">Introduce los datos de la pista:</p>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setLuz(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='luz' id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">La pista tiene luz</label>
              </div>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setCubierta(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='cubierta' id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">La pista está cubierta</label>
              </div>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setDisponible(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='disponible' id="flexSwitchCheckDisabled" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">La pista esta disponible</label>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPrecio" className="form-label">Precio pista</label>
                <input value={contexto.precioPista} onChange={(e) => contexto.setPrecioPista(e.target.value)} type="number" step="0.01" className="form-control" id="inputPrecio" name="precioPista" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPrecio" className="form-label">Precio Luz</label>
                <input value={contexto.precioLuz} onChange={(e) => contexto.setPrecioLuz(e.target.value)} type="number" step="0.01" className="form-control" id="inputPrecio" name="precioLuz" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="selectTipo" className="form-label">Selecciona el tipo de pista</label>
                <select value={contexto.tipoPista.value} onChange={(e) => contexto.setTipoPista(e.target.value)} className="form-select" id="selectTipo" name="tipoPista" aria-label="Default select example">
                  <option value="">Escoge una opción</option>
                  <option value="tenis">Tenis</option>
                  <option value="padel">Pádel</option>
                  <option value="futbol">Fútbol</option>
                  <option value="futbolSala">Fútbol sala</option>
                </select>
              </div>
              <button id='boton' type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div> */}

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
          <Typography component="h2" variant="h5" className='titleFormEditCreate' >
            Introduce los datos de la pista:
          </Typography>
          <Box component="form" onSubmit={editar} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    required
                    control={<Switch />} label="La pista tiene luz"
                    name='luz'
                    onChange={(e) => contexto.setLuz(e.target.value)}
                  />
                  <FormControlLabel
                    required
                    control={<Switch />}
                    label="La pista está cubierta"
                    name='cubierta'
                    onChange={(e) => contexto.setCubierta(e.target.value)}
                  />
                  <FormControlLabel
                    required
                    control={<Switch defaultChecked />}
                    label="La pista esta disponible"
                    name='disponible'
                    onChange={(e) => contexto.setDisponible(e.target.value)}
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
                  value={contexto.precioPista}
                  onChange={(e) => contexto.setPrecioPista(e.target.value)}
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
                  value={contexto.precioLuz}
                  onChange={(e) => contexto.setPrecioLuz(e.target.value)}
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
                    value={contexto.tipoPista.value}
                    label="Tipo de pista"
                    onChange={(e) => contexto.setTipoPista(e.target.value)}
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
            <Exito />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  )
}
