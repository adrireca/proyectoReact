import { createContext, useContext, useState } from 'react';
import { obtenerDatos } from '../library/Library';
import { useNavigate } from 'react-router-dom';

//Utilizamos un contexto para todos los estados que necesitemos por los diversos componentes.
const contextProvider = createContext({
  currentUser: null,
  token: null,
  setUser: () => { },
  setToken: () => { },
});


export const ContextProvider = (props) => {

  /* Url de la api. */
  /* Empresa port:80, Casa port:8090. */
  // const url = "http://localhost:80/api/pistas";
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
  /* Estado para editar pista. */
  const [court, setCourt] = useState({
    id: null,
    luz: false,
    cubierta: false,
    disponible: false,
    precioPista: 0,
    precioLuz: 0,
    tipoPista: ''
  });

  // const [name, setFirstName] = useState('');
  // // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  /* */
  const navigate = useNavigate();

  /* */
  const [loading, setLoading] = useState(false);

  //Obtenemos las pistas.
  // const getPistas = async () => {
  //   /* */
  //   setLoading(true);

  //   let datos = await obtenerDatos(url);
  //   /* */
  //   setLoading(false);
    
  //   setPistas(datos);
  // };

  /* */
  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }

  /* Si no hay token reedirige al login. */
  const loginRedirect = () => {
    if(!token){
      navigate('/login');
    }
  };

  //Lo recogemos todo en el objeto.
  const datos = {
    id,
    setId,
    pistas,
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
    setToken,
    navigate,
    loginRedirect,
    court,
    setCourt
  };


  return (
    //Proveemos de los datos a los componentes hijo.
    <contextProvider.Provider value={datos}>
      {props.children}
    </contextProvider.Provider>
  )
}

// export const useStateContext = () => useContext(datosContexto);
export { contextProvider as contextData }