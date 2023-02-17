import React from "react";
import "./App.css";
import { DatosProveedor } from "./contextos/DatosProveedor";
import { Pistas } from "./Pistas/Pistas";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { CrearPista } from "./CrearPista/CrearPista";
import { Titulo } from "./layout/Titulo";
import { Inicio } from "./Inicio/Inicio";
import { EditarPista } from "./Pista/EditarPista";


function App() {
  return (
    <React.Fragment>
      <DatosProveedor>
        <BrowserRouter>
        {/* Menú de navegación con sus respectivas rutas utilizando el componente Routes. */}
          <header className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="logo">
                  {/* Ruta hacia la home pulsando el logo. */}
                  <NavLink className={'navbar-brand'} to={"/"}>SPORTCLUB</NavLink>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                      
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Deportes
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item">
                            Tenis
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Pádel
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Fútbol
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Fútbol sala
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Piscina
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item">
                            Gimnasio
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      {/* Ruta hacia pistas. */}
                    <NavLink to={"/api/pistas"}
                      className={({isActive}) => isActive ? 'nav-link activado' : 'nav-link'}
                      >Pistas</NavLink>
                    </li>
                    <li className="nav-item">
                      {/* Ruta hacia el formulario crear pista. */}
                    <NavLink to={"/api/crear-pista"}
                      className={({isActive}) => isActive ? 'nav-link activado' : 'nav-link'}
                      >Crear pista</NavLink>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        Reservas
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        Mi cuenta
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/* Componente que acompaña al menú dentro del header. */}
          <Titulo/>
          
        {/* Rutas de navegación. */}
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/api/pistas" element={<Pistas />} />
          <Route path="/api/crear-pista" element={<CrearPista />} />
          <Route path="/api/editar-pista" element={<EditarPista />} />
        </Routes>
        </BrowserRouter>

      </DatosProveedor>
      
    </React.Fragment>
  );
}

export default App;
