import React, { useContext, useEffect } from 'react'
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Pistas = () => {

  //Obtenemos todos los datos del contexto.
  const contexto = useContext(datosContexto);

  const borrar = ((e) => {
    var data = '';

    ////Preparamos el objeto con los datos, la url a la api y la petición.
    var config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `http://localhost:8090/api/pistas/${e.target.id}`,
      headers: {},
      data: data
    };

    //Petición delete con axios.
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  });


  //Mostramos las pistas al recargar la página pistas.
  useEffect(() => {
    contexto.getPistas();
  },[]);

  return (
    <React.Fragment>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* Mapeamos las pistas. */}
            {contexto.pistas.pistas ?
              contexto.pistas.pistas.map((p, i) => {
                return (
                  <div key={i} className="col">
                    <div className="card shadow-sm">
                      {/* Dependiendo el tipo de pista, le añadimos una u otra imagen. */}
                      {p.tipoPista === 'tenis' ?
                        <img src="../img/wimbledon-pistas.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Imagen no disponible."/>
                        : ""}
                      {p.tipoPista === 'padel' ?
                        <img src="../img/padel1.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Imagen no disponible."/>
                        : ""}
                      {p.tipoPista === 'futbol' ?
                        <img src="../img/futbol1.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Imagen no disponible."/>
                        : ""}
                      {p.tipoPista === 'futbolSala' ?
                        <img src="../img/futbolSala1.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" alt="Imagen no disponible."/>
                        : ""}
                      <div className="card-body">
                        <p className="lead">Características</p>
                        {/* Dependiendo de si es true o false, mostramos uno u otro mensaje. */}
                        {p.luz === 1 ?
                          <p>Esta pista tiene luz disponible.</p>
                          : <p>Esta pista no tiene luz disponible.</p>
                        }
                        {p.cubierta === 1 ?
                          <p>Esta pista está cubierta.</p>
                          : <p>Esta pista no está cubierta.</p>
                        }
                        <p>Precio: {p.precioPista}€</p>
                        <div className="d-flex justify-content-around align-items-center">
                          {/* Al click del botón editar, reedirigimos a editar pista. */}
                          <Link to="/editar-pista"><button onClick={() => contexto.setId(p.id)} className="btn btn-sm btn-outline-primary" type="button" aria-expanded="false">Editar</button></Link>
                          {/* Al click del botón borrar, llama a la función borrar. */}
                          <button id={p.id} onClick={(e) => borrar(e)} className="btn btn-sm btn-outline-danger" type="button" aria-expanded="false">Eliminar</button>
                          {p.disponible === 1 ?
                            <small className="text-success">Disponible</small>
                            :
                            <small className="text-danger">No disponible</small>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              : "No se han detectado pistas en esta API"}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
