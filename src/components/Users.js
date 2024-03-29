import React, { useEffect, useState, useContext } from 'react'
import { contextData } from '../context/ContextProvider';
import axiosClient from '../axios-client';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { palette } from '../library/Library.js';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Loading from './Loading';

export const Users = () => {

    /* Datos del contexto. */
    const c = useContext(contextData);
    /* */
    const [errors, setErrors] = useState(null);
    /* */
    const redColor = palette.redColor;
    /* */
    const [loading, setLoading] = useState(false);
    /* Lista de usuarios. */
    const [users, setUsers] = useState([]);
    /* Usuario actual en diálogo. */
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    /* Manejador del diálogo. */
    // const [dialogOpen, setDialogOpen] = useState(false);

    /* Cierra diálogo. */
    // const onCloseClick = () => {
    //     setDialogOpen(false);
    // };

    /* Columnas de la table. */
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'created_at', headerName: 'Fecha creación', width: 200 },
        {
            field: 'actions',
            headerName: 'Acciones',
            sortable: false,
            width: 200,
            renderCell: (params) => {
                const onActionsClick = (e) => {
                    /* No se marca la fila al clickear el botón. */
                    e.stopPropagation();

                    /* Fila actual. */
                    const currentRow = params.row;

                    /* Edita usuario. */
                    if (e.target.textContent === 'Edit') {
                        c.navigate(`/users/${currentRow.id}`)
                        /* Abre diálogo. */
                        // setDialogOpen(true);
                    }
                    /* Elimina usuario. */
                    else {
                        deleteUser(currentRow.id);
                    }

                };

                return (
                    <ButtonGroup variant="text" size="small" aria-label="text button group">
                        <Button onClick={onActionsClick}>Edit</Button>
                        <Button color="error" onClick={onActionsClick}>Delete</Button>
                    </ButtonGroup>
                )
            },
        }
    ];



    /* Al cargan la página se muestran los usuarios. */
    useEffect(() => {
        getUsers();
    }, [])




    /* Elimina un usuario. */
    const deleteUser = ((key) => {

        /* Solo elimina si confirma el usuario. */
        if (!window.confirm('¿Estás seguro?')) {
            return
        }

        /* */
        setLoading(true);

        axiosClient.delete(`/users/${key}`)
            .then(() => {

                console.log('Usuario eliminado correctamente.');
                getUsers();
            })
    });



    /* Obtiene los usuarios. */
    const getUsers = () => {
        /* */
        setLoading(true);

        axiosClient.get('/users')
            .then(({ data }) => {
                /* */
                setLoading(false);

                setUsers(data.data)
            })
            .catch(() => {
                /* */
                setLoading(false);
            })
    }



    return (
        <>
            <main>
                <Container sx={{ py: 8 }} maxWidth="lg" className='divUsers'>
                    <Link to={'/signup'} className='btnNewUser' >
                        <Button sx={{ mb: 1 }} variant='contained' size="small">New</Button>
                    </Link>
                    {/*  */}
                    {loading &&
                        <Loading />
                    }
                    {users ?
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={users}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    :
                        'No hay usuarios para mostrar.'
                    }
                </Container>

            </main>
        </>
    )
}
