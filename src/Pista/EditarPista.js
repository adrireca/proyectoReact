import React, { useContext } from 'react';
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const EditarPista = () => {

  //Obtenemos todos los datos del contexto.
  const contexto = useContext(datosContexto);

  //Hook navigate para reedirigir a otro lugar de la web.
  const navigate = useNavigate();

  const editar = (e) => {
    //Deshabilitamos el refresco al click del botón.
    e.preventDefault();

    try {

      /*
      Dentro del checkbox, en caso de on asignamos 1 al estado.
      De lo contrario, 0, que es lo que admite el campo boolean dentro la base de datos.
      */
      if (contexto.luz === 'on') {
        contexto.luz = 1;
      } else {
        contexto.luz = 0;
      }

      if (contexto.disponible === 'on') {
        contexto.disponible = 1;
      } else {
        contexto.disponible = 0;
      }

      if (contexto.cubierta === 'on') {
        contexto.cubierta = 1;
      } else {
        contexto.cubierta = 0;
      }

      //Recogemos todos los datos en el objeto.
      var data = JSON.stringify({
        "precioPista": contexto.precioPista,
        "Luz": contexto.luz,
        "precioLuz": contexto.precioLuz,
        "tipoPista": contexto.tipoPista,
        "cubierta": contexto.cubierta,
        "disponible": contexto.disponible
      });

      //Preparamos el objeto con los datos, la url a la api y la petición.
      var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:8090/api/pistas/${contexto.id}`,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'XSRF-TOKEN=eyJpdiI6Imhia2xsY0tPMnZWd0ZlWEpuaTcxbFE9PSIsInZhbHVlIjoibW1uWTZWQVpzN1NuRmkxVmJub1FJUGhsK25qdFp3bkRiRHdGT0lVNGlCWGF6VXJQbmNlSEFuRGMvcTVQQ1dEYTJhNFdsemNTNDg1V2Zwdkp3K2JucWVOcmtYeWxsajJZS1h4YjdPbTJWY1kyNlJaYXdLR1dxY2xkOGg1bmVFWm0iLCJtYWMiOiI2ZDQxZTA4ZGVkMWU5MDRlNjg3YWUwMTZmYmIxM2FkYzQ4OGQ5NmJlN2VkNzE4NDJiMDhhMTcyZDc1NzM1YjdhIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InpRUXk5T0d5ckVwUnlZNEhhNkpJSmc9PSIsInZhbHVlIjoiK1hzQVArNXpwbTg4VUxURXhEUVI5QUo4c2lISkVrWkdUUDk5MUMrbzgwVjlyOUljUkpQUm9WK0ZHbXVCR2x1UVlFY2c3a1gwbWVyZ2lvRCtIdWVUb3NJWHFxN1l4aXZDaTZ0aitUWXRMYkJ1UXVWUjR6ZGtuSTBZMEVROUNRSXIiLCJtYWMiOiJiN2NmMzgwMGU3MWVhZjJiYzJiYTg2NjRkM2MyZDVlOTI0MTgyMjczZjY5ZmYyMDYyNTU2YzU2Mjg4YmYwNjI4IiwidGFnIjoiIn0%3D'
        },
        data: data
      };

      //Petición put con axios.
      axios(config)
        .then(function (response) {

          //Reedirigimos a pistas al crear una pista.
          navigate("/api/pistas");

          //Vaciamos los campos del formulario.
          contexto.setPrecioLuz('');
          contexto.setPrecioPista('');
        })
        .catch(function (error) {
          console.log(error);
        });

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <React.Fragment>
      <div className="container-fluid py-5 bg-light m-0">
        <div className="w-50 m-auto">
          <div className="container px-5">
            <form onSubmit={editar}>
              <p className="lead">Introduce los datos de la pista:</p>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setLuz(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='luz' id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">La pista tiene luz</label>
              </div>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setCubierta(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='cubierta' id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">La pista está cubierta</label>
              </div>
              <div className="form-check form-switch">
                <input onChange={(e) => contexto.setDisponible(e.target.value)} className="form-check-input" type="checkbox" role="switch" name='disponible' id="flexSwitchCheckDisabled" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">La pista esta disponible</label>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPrecio" className="form-label">Precio pista</label>
                <input value={contexto.precioPista} onChange={(e) => contexto.setPrecioPista(e.target.value)} type="number" step="0.01" className="form-control" id="inputPrecio" name="precioPista" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPrecio" className="form-label">Precio Luz</label>
                <input value={contexto.precioLuz} onChange={(e) => contexto.setPrecioLuz(e.target.value)} type="number" step="0.01" className="form-control" id="inputPrecio" name="precioLuz" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="selectTipo" className="form-label">Selecciona el tipo de pista</label>
                <select value={contexto.tipoPista.value} onChange={(e) => contexto.setTipoPista(e.target.value)} className="form-select" id="selectTipo" name="tipoPista" aria-label="Default select example">
                  <option value="">Escoge una opción</option>
                  <option value="tenis">Tenis</option>
                  <option value="padel">Pádel</option>
                  <option value="futbol">Fútbol</option>
                  <option value="futbolSala">Fútbol sala</option>
                </select>
              </div>
              <button id='boton' type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
