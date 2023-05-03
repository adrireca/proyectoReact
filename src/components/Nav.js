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
                                <img src="img/logo_club_1.png" alt="Logo" />
                            </Link>
                        </div>

                        {/* Menú barra navegación. */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
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
                                </Menu>
                            </div>
                            <Link to={'/pistas'} className={({ isActive }) => isActive ? 'nav-link activado enlaces' : 'nav-link enlaces'}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Pistas
                                </Button>
                            </Link>
                            <Link to={'/crear-pista'} className={({ isActive }) => isActive ? 'nav-link activado enlaces' : 'nav-link enlaces'}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Crear pista
                                </Button>
                            </Link>
                            <Link to={'/reservas'} className={({ isActive }) => isActive ? 'nav-link activado enlaces' : 'nav-link enlaces'}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Reservas
                                </Button>
                            </Link>
                            <Link to={'/contacto'} className={({ isActive }) => isActive ? 'nav-link activado enlaces' : 'nav-link enlaces'}>
                                <Button
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Contacto
                                </Button>
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                                <Link to="/login" className='enlaces'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Sign in</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to="/signup" className='enlaces'>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Sign up</Typography>
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
