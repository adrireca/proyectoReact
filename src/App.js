import React from "react";
import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
// import { Pistas } from "./Pistas/Pistas";
import { Routes, Route } from "react-router-dom";
import { CourtCreate } from "./components/CourtCreate";
import { IndexTemplate } from "./components/layout/IndexTemplate";
import { CourtUpdate } from "./components/CourtUpdate";
import { Nav } from "./components/Nav";
import { NoPage } from './components/NoPage';
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Contact } from "./components/Contact";
import { Courts } from "./components/Courts";
import { Users } from "./components/Users";
import { UserUpdate } from "./components/UserUpdate";
import { Footer } from "./components/layout/Footer";
import { Reservation } from "./components/Reservation";
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
            <Route path="/crear-pista" element={<CourtCreate />} />
            <Route path="/editar-pista/:id" element={<CourtUpdate />} key="courtUpdate"/>
            <Route path="/reservas" element={<Reservation />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />} />
            {/* <Route path="/users/new" element={<UserForm />} key="userCreate" /> */}
            <Route path="/users/:id" element={<UserUpdate />} key="userUpdate" />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
        {/*  */}
        <Footer />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
