import { createContext, useContext, useState } from 'react';
import { obtenerDatos } from '../Biblioteca/Biblioteca';

//Utilizamos un contexto para todos los estados que necesitemos por los diversos componentes.
const datosContexto = createContext({
  currentUser: null,
  token: null,
  setUser: () => { },
  setToken: () => { },
});

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

  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  //Obtenemos las pistas.
  const getPistas = async () => {
    let datos = await obtenerDatos(url);
    setPistas(datos);
  };

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

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
    user,
    setUser,
    token,
    setToken
  };


  return (
    //Proveemos de los datos a los componentes hijo.
    <datosContexto.Provider value={datos}>
      {props.children}
    </datosContexto.Provider>
  )
}

// export const useStateContext = () => useContext(datosContexto);
export { datosContexto }