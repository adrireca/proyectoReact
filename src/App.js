import React from "react";
import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
// import { Pistas } from "./Pistas/Pistas";
import { Routes, Route } from "react-router-dom";
import { CrearPista } from "./CrearPista/CrearPista";
import { IndexTemplate } from "./components/layout/IndexTemplate";
import { EditarPista } from "./EditarPista/EditarPista";
import { Nav } from "./components/Nav";
import { NoPage } from './components/NoPage';
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Contact } from "./components/Contact";
import { Courts } from "./components/Courts";
import { Users } from "./components/Users";
import { UserForm } from "./components/UserForm";
// import { UserForm } from "./components/UserForm";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function App() {
  return (
    <React.Fragment>
      <ContextProvider>
        {/* Rutas de navegación. */}
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<IndexTemplate />} />
            <Route path="/pistas" element={<Courts />} />
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
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
