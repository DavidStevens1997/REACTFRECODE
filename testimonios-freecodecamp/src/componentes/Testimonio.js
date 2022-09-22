import React from 'react';

function Testimonio() {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require('../imagenes/luffy-2.png')}
      alt='Foto de Luffy'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Monkey D. Luffy en Wano</p>
        <p className='cargo-testimonio'>Capitan de los sombreros de paja</p>
        <p className='texto-testimonio'>Monkey D. Luffy es el protagonista principal de la serie de manga y anime One Piece. Es el capitán y fundador de los Piratas de Sombrero de Paja así como un de los Cuatro Emperadores que gobiernan los mares del Nuevo Mundo.</p>
      </div>
    </div>
  );
}

export default Testimonio;