import { Navbar } from '../../components';
import APPIMAGE from '../../constants/image';
import './style.css';

function App() {
  const renderUI = () => {
    return (
      <>
        <Navbar />
        <div className="container-image">
          <img src={APPIMAGE.EMOJI} alt='' className='image-emoji' />
        </div>
        <div className='main-p'>
          <div className="container-p">
            <p className="text-name">
              Hola, Soy Jorginho Ojeda 🤟
            </p>
          </div>
        </div>
        <div className='main-p'>
          <div className="container-p">
            <p className="text-content">
              Desarrollador de productos digitales web y movil.
            </p>
          </div>
        </div>

        <div className='main-p'>
          <div className="container-details">
            <p className="text-details">
              Tengo experiencia mas de 2 años desarrollando y haciendo plataformas virtuales en el sector educativo, financiero.
            </p>
          </div>
        </div>

        <div className='main-p'>
          <div className="container-details">
            <button className='container-button' onClick={() => alert('hola perra')}>
              <p className="text-button">
              Contáctame!
              </p>
            </button>
          </div>
        </div>
      </>
    );
  }
  return renderUI();
}

export default App;
