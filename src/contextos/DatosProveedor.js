import React, { createContext, useState } from 'react';
import { obtenerDatos } from '../Biblioteca/Biblioteca';

//Utilizamos un contexto para todos los estados que necesitemos por los diversos componentes.
const datosContexto = createContext();

export const DatosProveedor = (props) => {

    //Url de la api.
    const url = "http://localhost:8090/api/pistas";
    const valorInicial = [];

    /* Estados que utilizamos para recoger y actualizar los datos de los formularios. */
    const [id, setId] = useState('');
    const [pistas, setPistas] = useState(valorInicial);
    const [luz, setLuz] = useState('');
    const [cubierta, setCubierta] = useState('');
    const [disponible, setDisponible] = useState('');
    const [precioPista, setPrecioPista] = useState('');
    const [precioLuz, setPrecioLuz] = useState('');
    const [tipoPista, setTipoPista] = useState('');

    //Obtenemos las pistas.
    const getPistas = async () => {
       let datos = await obtenerDatos(url);
       setPistas(datos);
    };
    
    //Lo recogemos todo en el objeto.
    const datos = {
      id,
      setId,
      pistas,
      getPistas,
      url,
      luz,
      setLuz,
      cubierta,
      setCubierta,
      disponible,
      setDisponible,
      precioPista,
      setPrecioPista,
      precioLuz,
      setPrecioLuz,
      tipoPista,
      setTipoPista,
    };


  return (
    //Proveemos de los datos a los componentes hijo.
    <datosContexto.Provider value={datos}>
        {props.children}
    </datosContexto.Provider>
  )
}

export { datosContexto }