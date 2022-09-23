import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)} 
      alt='Foto de Personaje' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre} en {props.pais}</strong></p>
        <p className='cargo-testimonio'>{props.cargo} de <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;