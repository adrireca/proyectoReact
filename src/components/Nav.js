import * as React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

export const Nav = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <AppBar position="absolute" className='navbar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo header. */}
                        <div className="logo_header">
                            <Link to="/" className='enlaces'>
                                <img src="img/logo_club_2.png" alt="Logo" />
                            </Link>
                        </div>

                        {/* Menú barra navegación. */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end', marginRight: '15px', alignItems: 'center' }}>
                            
                                {/* <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{my: 2, color: '#fff', display: 'block'}}
                                >
                                    Deportes
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Tenis</MenuItem>
                                    <MenuItem onClick={handleClose}>Pádel</MenuItem>
                                    <MenuItem onClick={handleClose}>Fútbol</MenuItem>
                                    <MenuItem onClick={handleClose}>Fútbol sala</MenuItem>
                                </Menu> */}
                            
                            <NavLink to={'/pistas'} className={({isActive}) => isActive ? 'enlaces activado' : 'enlaces'}>
                                Pistas
                            </NavLink>
                            <NavLink to={'/crear-pista'} className={({isActive}) => isActive ? 'enlaces activado' : 'enlaces'}>
                                Crear Pista
                            </NavLink>
                            <NavLink to={'/reservas'} className={({isActive}) => isActive ? 'enlaces activado' : 'enlaces'}>
                                Reservas
                            </NavLink>
                            <NavLink to={'/contacto'} className={({isActive}) => isActive ? 'enlaces activado' : 'enlaces'}>
                                Contacto
                            </NavLink>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Identificarse">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className='btnUserNav'>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* Menu usuario. */}
                                <Link to="/login" className='linkBtnUser'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Inicia sesión</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/signup" className='linkBtnUser'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Regístrate</Typography>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


            <Outlet />
        </>
    )
}
