
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Los personajes favoritos del Anime:</h1>
      <Testimonio 
      nombre='Monkey D. Luffy'
      pais='Wano'
      imagen='luffy-2'
      cargo='Capitan'
      empresa='los sombreros de paja'
      testimonio='es el protagonista principal de la serie de manga y anime One Piece. Es el capitán y fundador de los Piratas de Sombrero de Paja así como un de los Cuatro Emperadores que gobiernan los mares del Nuevo Mundo.' />
      <Testimonio
      nombre='Gon Freecss'
      pais='Greed Island'
      imagen='gon'
      cargo='Cazador'
      empresa='Hunter x Hunter' 
      testimonio='es el protagonista principal de la serie de manga y anime Hunter × Hunter. Está en búsqueda de su padre, el famoso cazador Ging Freecss.' />
      <Testimonio 
      nombre='Eren Yeager'
      pais='Muralla María'
      imagen='eren'
      cargo='Titan'
      empresa='Shingeki no Kyojin' 
      testimonio=' Es el único hijo de Grisha y Carla Jaeger. A su vez, es el medio hermano menor de Zeke Jaeger, el hermano adoptivo de Mikasa Ackerman y un Titán Cambiante, siendo el último portador del Titán de Ataque.' />
      </div>
    </div>
  );
}

export default App;
