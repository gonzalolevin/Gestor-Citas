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

  const elimnarTarjeta = (id) => {
    const tarjetass = tarjetas.filter((tarjeta) => tarjeta.id !== id)
    setTarjetas(tarjetass);
}

  return (
    <div>
      <Formulario onAgregarTarjeta = {RecibirDatos}/> 
      <div className='one-half column'>    
      <h2 className="text-center mb-4">administra tus citas</h2>
      {tarjetas.map((tarjeta) => (
      <Tarjeta
        key={tarjeta.id}
        datos={tarjeta.data}
        OnEliminarTarjeta = {() => elimnarTarjeta(tarjeta.id)}/>
    
))}
    </div> 
    </div>
  );
}

export default App;
