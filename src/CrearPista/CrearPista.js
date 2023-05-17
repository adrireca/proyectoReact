import React, { useContext } from 'react';
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { Exito } from '../Exito/Exito';

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


export const CrearPista = () => {

    /* Importa los datos del contexto. */
    const c = useContext(datosContexto);

    /* Si no hay token reedirige al login. */
    c.loginRedirect();

    /* Guarda una pista */
    const store = async (e) => {
        //Deshabilitamos el refresco al click del botón.
        e.preventDefault();

        try {
            /*
            Dentro del checkbox, en caso de on asignamos 1 al estado.
            De lo contrario, 0, que es lo que admite el campo boolean dentro la base de datos.
            */
            if (c.luz === 'on') {
                c.luz = 1;
            } else {
                c.luz = 0;
            }

            if (c.disponible === 'on') {
                c.disponible = 1;
            } else {
                c.disponible = 0;
            }

            if (c.cubierta === 'on') {
                c.cubierta = 1;
            } else {
                c.cubierta = 0;
            }

            //Convertimos a float.
            c.precioPista = parseFloat(c.precioPista);
            c.precioLuz = parseFloat(c.precioLuz);

            //Petición post con axios asignando cada estado a su campo correspondiente.
            await axios.post(c.url, {
                luz: c.luz,
                tipoPista: c.tipoPista,
                precioLuz: c.precioLuz,
                cubierta: c.cubierta,
                disponible: c.disponible,
                precioPista: c.precioPista
            })

            //Reedirigimos a pistas al crear una pista.
            c.navigate("/pistas");

            //Vaciamos los campos del formulario.
            c.setPrecioLuz('');
            c.setPrecioPista('');
        } catch (error) {
            console.log(error.message());
        }
    };


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
                    <Typography component="h2" variant="h5" className='titleFormEditCreate' >
                        Introduce los datos de la pista:
                    </Typography>
                    <Box component="form" onSubmit={store} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormGroup>
                                    <FormControlLabel
                                        required
                                        control={<Switch />} label="La pista tiene luz"
                                        name='luz'
                                        onChange={(e) => c.setLuz(e.target.value)}
                                    />
                                    <FormControlLabel
                                        required
                                        control={<Switch />}
                                        label="La pista está cubierta"
                                        name='cubierta'
                                        onChange={(e) => c.setCubierta(e.target.value)}
                                    />
                                    <FormControlLabel
                                        required
                                        control={<Switch defaultChecked />}
                                        label="La pista esta disponible"
                                        name='disponible'
                                        onChange={(e) => c.setDisponible(e.target.value)}
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
                        {/* Contiene el botón de enviar y el mensaje de éxito. */}
                        <Exito />
                    </Box>
                </Box>
            </Container>

        </React.Fragment>
    )
}