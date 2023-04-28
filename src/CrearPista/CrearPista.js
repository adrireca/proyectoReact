import React, { useContext } from 'react';
import { datosContexto } from '../contextos/DatosProveedor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Exito } from '../Exito/Exito';


export const CrearPista = () => {

    //Importa los datos del contexto.
    const contexto = useContext(datosContexto);

    //Hook navigate para reedirigir a otro lugar de la web.
    const navigate = useNavigate();

    /* Guarda una pista */
    const store = async (e) => {
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

            //Convertimos a float.
            contexto.precioPista = parseFloat(contexto.precioPista);
            contexto.precioLuz = parseFloat(contexto.precioLuz);

            //Petición post con axios asignando cada estado a su campo correspondiente.
            await axios.post(contexto.url, {
                luz: contexto.luz,
                tipoPista: contexto.tipoPista,
                precioLuz: contexto.precioLuz,
                cubierta: contexto.cubierta,
                disponible: contexto.disponible,
                precioPista: contexto.precioPista
            })

            //Reedirigimos a pistas al crear una pista.
            navigate("/pistas");

            //Vaciamos los campos del formulario.
            contexto.setPrecioLuz('');
            contexto.setPrecioPista('');
        } catch (error) {
            return error.message;
        }
    };


    return (

        <React.Fragment>
            <div className="col-md-7 mx-5">
            </div>
            <div className="container-fluid py-5 bg-light m-0">
                <div className="w-50 m-auto">
                    <div className="container px-5">
                        <form onSubmit={store}>
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
                            {/* Crea pista y mensaje de confirmación. */}
                            <Exito />
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}