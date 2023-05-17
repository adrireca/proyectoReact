import React from "react";
import "./App.css";
import { DatosProveedor } from "./contextos/DatosProveedor";
import { Pistas } from "./Pistas/Pistas";
import { Routes, Route } from "react-router-dom";
import { CrearPista } from "./CrearPista/CrearPista";
import { Inicio } from "./Inicio/Inicio";
import { EditarPista } from "./EditarPista/EditarPista";
import { Nav } from "./components/Nav";
import { NoPage } from './components/NoPage';
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Contact } from "./components/Contact";
import { Tracks } from "./components/Tracks";
import { Users } from "./components/Users";
import { UserForm } from "./components/UserForm";
// import { UserForm } from "./components/UserForm";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function App() {
  return (
    <React.Fragment>
      <DatosProveedor>
        {/* Rutas de navegación. */}
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Inicio />} />
            <Route path="/pistas" element={<Tracks />} />
            {/* <Route path="/pistas" element={<Pistas />} /> */}
            <Route path="/crear-pista" element={<CrearPista />} />
            <Route path="/editar-pista" element={<EditarPista />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/new" element={<UserForm />} key="userCreate" />
            <Route path="/users/:id" element={<UserForm />} key="userUpdate" />

            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </DatosProveedor>
    </React.Fragment>
  );
}

export default App;
