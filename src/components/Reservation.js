import React, { useContext, useEffect, useState } from 'react';
import { contextData } from '../context/ContextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import axiosClient from '../axios-client';
import Loading from './Loading';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';


const options = [
  '8:00 - 9:00',
  '9:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
];


export const Reservation = () => {
  //Importa los datos del contexto.
  const c = useContext(contextData);

  /* Si no hay token reedirige al login. */
  c.loginRedirect();

  /* */
  const [loading, setLoading] = useState(false);

  /* */
  const [courts, setCourts] = useState([{
    id: null,
    luz: false,
    cubierta: false,
    disponible: false,
    precioPista: 0,
    precioLuz: 0,
    tipoPista: '',
  }]);

  /* */
  const [reservations, setReservations] = useState([{
    id: null,
    idPista: 0,
    idUser: 0,
    disponible: false,
    hora: '',
    luz: false,
  }]);

  /* */
  const [light, setLight] = useState('');

  /* */
  const [hour, setHour] = useState('');

  //Muestra las pistas al cargar la página.
  useEffect(() => {
    getCourts();
    getReservations();
  }, []);


  /* Obtiene los usuarios. */
  const getCourts = () => {
    /* */
    setLoading(true);

    axiosClient.get('/pistas')
      .then(({ data }) => {
        /* */
        setLoading(false);

        setCourts(data);

      })
      .catch(() => {
        /* */
        setLoading(false);
      })
  }


  /* */
  const getReservations = () => {
    axiosClient.get('/reservas')
      .then(({ data }) => {
        /* */
        setReservations(data);
        console.log(reservations);
      })
      .catch(() => {

      })
  }


  /* */
  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  /* */
  const onLightChange = ((e) => {
    setLight(e.target.value);
  });

  /* */
  const onSubmit = ((e) => {
    e.preventDefault();

    console.log(e.target.id);
    console.log(reservations)
    console.log(light)
  });


  return (

    <Container sx={{ paddingTop: '170px', paddingBottom: '64px' }}>
      <Box component="form" noValidate onSubmit={onSubmit}>
        <TableContainer component={Paper} sx={{ maxWidth: '1200px', margin: 'auto' }}>
          {/*  */}
          {loading &&
            <Loading />
          }
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Pista</TableCell>
                <TableCell>Horas disponibles</TableCell>
                <TableCell>Luz</TableCell>
                <TableCell>Cubierta</TableCell>
                <TableCell>Precio / hora</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courts.pistas ?
                courts.pistas.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {row.tipoPista === 'futbol' &&
                      <TableCell component="th" scope="row">
                        Fútbol
                      </TableCell>
                    }
                    {row.tipoPista === 'padel' &&
                      <TableCell component="th" scope="row">
                        Pádel
                      </TableCell>
                    }
                    {row.tipoPista === 'tenis' &&
                      <TableCell component="th" scope="row">
                        Tenis
                      </TableCell>
                    }
                    {row.tipoPista === 'futbolSala' &&
                      <TableCell component="th" scope="row">
                        Fútbol sala
                      </TableCell>
                    }
                    <TableCell>
                      <Box sx={{ width: '100px' }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Horas</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={hour}
                            label="Hour"
                            onChange={handleHourChange}
                          >
                            {reservations.map((r) => (
                              <MenuItem
                                key={r.hora}
                                value={r.hora}
                              >
                                {r.hora}
                              </MenuItem>
                            ))}

                            {/* options.map((h) => {
                              //   <MenuItem
                              //     key={Object.keys(h)[0]}
                              //     value={h[Object.keys(h)]}
                              //   >
                              //     {Object.keys(h)[0]}
                              //   </MenuItem>
                              // })*/}

                          </Select>
                        </FormControl>
                      </Box>
                    </TableCell>
                    {row.disponible ?
                      <TableCell>
                        <Box sx={{ width: '100px' }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Luz</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={light}
                              label="Luz"
                              onChange={onLightChange}
                            >
                              <MenuItem value={true}>Sí</MenuItem>
                              <MenuItem value={false}>No</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </TableCell>
                      :
                      <TableCell sx={{ color: '#dc3545' }}>No disponible.</TableCell>
                    }
                    {row.cubierta === 1 ?
                      <TableCell>Si</TableCell>
                      :
                      <TableCell>No</TableCell>
                    }
                    <TableCell>{row.precioPista}€</TableCell>
                    <TableCell>
                      <Button type='submit' id={row.id} variant="text" size="small" onClick={onSubmit}>Reservar</Button>
                    </TableCell>
                  </TableRow>
                ))
                :
                ''
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
