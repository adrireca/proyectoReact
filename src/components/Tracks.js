import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AlertDialog from './AlertDialog';

/* Colores personalizados. */
const redColor = red[500];
const greenColor = green[500];

/* */
const theme = createTheme();

export const Tracks = () => {

    /* Obtenemos todos los datos del contexto. */
    const contexto = useContext(datosContexto);

    /* Si no hay token reedirige al login. */
    contexto.loginRedirect();

    /* Elimina una pista. */
    const onDeleteClick = (e) => {
        let data = '';

        /* Datos la petición. */
        var config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:8090/api/pistas/${e.target.id}`,
            headers: {},
            data: data
        };

        /* Solo elimina si confirma el usuario. */
        if (!window.confirm('¿Estás seguro?')) {
            return
        }

        /* Petición delete. */
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        /* añadir snackbar '¡Eliminada correctamente!' */
    }


    //Muestra las pistas al cargar la página.
    useEffect(() => {
        contexto.getPistas();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Container className='divTracks' maxWidth="sm">
                    <Typography className='titleTracks' variant="h2" align="center" color="text.secondary" >
                        Nuestras pistas
                    </Typography>
                    {/* <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Main call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack> */}
                </Container>

                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Se recorre y se comprueba si existen o no pistas. */}
                        {contexto.pistas.pistas ?
                            contexto.pistas.pistas.map((p, i) => {
                                return (
                                    <Grid item key={i} xs={12} sm={6} md={4}>
                                        <Card
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                            {/* Dependiendo el tipo de pista, se le añade una u otra imagen. */}
                                            {p.tipoPista === 'tenis' ?
                                                <CardMedia
                                                    component="img"
                                                    image="../img/pista_tenis.jpg"
                                                    alt="tenis"
                                                />
                                                : ''}
                                            {p.tipoPista === 'padel' ?
                                                <CardMedia
                                                    component="img"
                                                    image="../img/pista_padel.jpg"
                                                    alt="tenis"
                                                />
                                                : ''}
                                            {p.tipoPista === 'futbol' ?
                                                <CardMedia
                                                    component="img"
                                                    image="../img/pista_futbol.jpg"
                                                    alt="tenis"
                                                />
                                                : ''}
                                            {p.tipoPista === 'futbolSala' ?
                                                <CardMedia
                                                    component="img"
                                                    image="../img/pista_futbolSala.jpg"
                                                    alt="tenis"
                                                />
                                                : ''}
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                {/* Se hacen varias comprobaciones para mostrar uno u otro resultado. */}
                                                {p.luz === 1 ?
                                                    <Typography gutterBottom variant="body2" >Luz disponible.</Typography>
                                                    :
                                                    <   Typography gutterBottom variant="body2" >Luz no disponible.</Typography>
                                                }
                                                {p.cubierta === 1 ?
                                                    <Typography gutterBottom variant="body2" >Pista cubierta.</Typography>
                                                    :
                                                    <   Typography gutterBottom variant="body2" >Pista no cubierta.</Typography>
                                                }
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="body2" >{p.precioPista}€ / hora</Typography>

                                                    {p.disponible === 1 ?
                                                        <Typography variant="body2" color={greenColor} >Disponible</Typography>
                                                        :
                                                        <   Typography variant="body2" color={redColor} >No disponible</Typography>
                                                    }
                                                </Box>

                                            </CardContent>
                                            <CardActions>
                                                <Link to='/editar-pista' ><Button onClick={() => contexto.setId(p.id)} size="small">Editar</Button></Link>
                                                <Button id={p.id} onClick={(e) => onDeleteClick(e)} size="small">Eliminar</Button>
                                                {/* <AlertDialog /> */}
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })

                            : ''}

                        {/* {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))} */}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    )
}
