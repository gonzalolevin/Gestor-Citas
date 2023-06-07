import './App.css';



function Tarjeta(form, EliminarTarjeta) {
console.log(form.datos)

  function EliminarTarjet()
  {
    EliminarTarjeta
  }

    return (



    <div className="one-half column">
        
            <div className="cita">
              <p>Mascota: <span>{form.datos.mascota}</span></p>
              <p>Dueño: <span>{form.datos.propietario}</span></p>
              <p>Fecha: <span>{form.datos.fecha}</span></p>
              <p>Hora: <span>{form.datos.hora}</span></p>
              <p>Sintomas: <span>{form.datos.sintomas}</span></p><button onClick={EliminarTarjet} className="button elimnar u-full-width">Eliminar </button>
            </div>
           
    </div >
    )
}

export default Tarjeta;