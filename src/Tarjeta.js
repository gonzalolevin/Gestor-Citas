import './App.css';



function Tarjeta({ datos, OnEliminarTarjeta }) {
  const EliminarTarjeta = () => {
    OnEliminarTarjeta();
  };

  return (

      <div className="cita">
        <p>Mascota: <span>{datos.mascota}</span></p>
        <p>Dueño: <span>{datos.propietario}</span></p>
        <p>Fecha: <span>{datos.fecha}</span></p>
        <p>Hora: <span>{datos.hora}</span></p>
        <p>Sintomas: <span>{datos.sintomas}</span></p>
        <button onClick={EliminarTarjeta} className="button eliminar u-full-width">Eliminar</button>
      </div>
    
  );
}

export default Tarjeta;