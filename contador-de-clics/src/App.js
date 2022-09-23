import './App.css';
import onepieceLogo from './imagenes/onepiece-logo.png';
function App() {
  return (
    <div className= 'App'>
     <div className='onepiece-logo-contenedor'>
      <img 
      className='onepiece-logo'
      scr={onepieceLogo}
      alt='Logo de onepiece' />
     </div>
    </div>
  );
}

export default App;
