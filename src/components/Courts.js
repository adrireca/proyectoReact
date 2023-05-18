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
import { contextData } from '../context/ContextProvider';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/* Colores personalizados. */
const redColor = red[500];
const greenColor = green[500];

/* */
const theme = createTheme();

export const Courts = () => {

    /* */
    const [open, setOpen] = React.useState(false);

    const onCloseClick = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    /* Obtenemos todos los datos del contexto. */
    const c = useContext(contextData);

    /* Si no hay token reedirige al login. */
    c.loginRedirect();

    /* Elimina una pista. */
    const onDeleteClick = (e) => {
        let data = '';

        /* Datos la petición. */
        var config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${c.url}/${e.target.id}`,
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

                /* Al eliminar una pista vuelve a cargar las pistas. */
                c.getPistas();
            })
            .catch(function (error) {
                console.log(error);
            });

        /* Al eliminar una pista muestra snackbar de confirmación. */
        setOpen(true);
    }


    //Muestra las pistas al cargar la página.
    useEffect(() => {
        c.getPistas();
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
                        {c.pistas.pistas ?
                            c.pistas.pistas.map((p, i) => {
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
                                                <Link to='/editar-pista' ><Button onClick={() => c.setId(p.id)} size="small">Editar</Button></Link>
                                                <Button id={p.id} onClick={(e) => onDeleteClick(e)} size="small">Eliminar</Button>
                                                {/* <AlertDialog /> */}
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })

                            : ''}

                    </Grid>
                </Container>

                {/* Snackbar de confirmación. */}
                <Snackbar open={open} autoHideDuration={6000} onClose={onCloseClick}>
                    <Alert onClose={onCloseClick} severity="success" sx={{ width: '100%' }}>
                        Pista eliminada con éxito.
                    </Alert>
                </Snackbar>

            </main>
        </ThemeProvider>
    )
}
