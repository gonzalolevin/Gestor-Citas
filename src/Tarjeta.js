import Formulario from "./Formulario";
import './App.css';


function Tarjeta(form) {
console.log(form)
    return (
    <div className="one-half column">
        
            <div className="cita">
              <p>Mascota: <span>{form.mascota}</span></p>
              <p>Dueño: <span>{form.propietario}</span></p>
              <p>Fecha: <span>{form.fecha}</span></p>
              <p>Hora: <span>{form.hora}</span></p>
              <p>Sintomas: <span>{form.sintomas}</span></p><button className="button elimnar u-full-width">Eliminar </button>
            </div>
           
    </div >
    )
}

export default Tarjeta;