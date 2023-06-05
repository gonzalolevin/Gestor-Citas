import logo from './logo.svg';
import './App.css';
import Formulario from './Formulario';
import { useState } from 'react';
import Tarjeta from './Tarjeta';


function App() {
  const [tarjetas, setTarjetas] = useState([])

  function RecibirDatos(datos)
  {
    const obj={
      id: new Date().getTime(),
      data: datos
    }

  setTarjetas([...tarjetas, obj]);
   // console.log(tarjetas);
  }



  return (
    <div className="App container mt-5">
      <Formulario onAgregarTarjeta = {RecibirDatos}/>
      
      {tarjetas.map((tarjeta) => (
      <Tarjeta form = {tarjeta.data} key={tarjeta.id}/>
      ) )}
      

    </div>
  );
}

export default App;
