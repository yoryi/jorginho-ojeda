import {Navbar} from '../../components';
import APPIMAGE from '../../constants/image';
import './style.css';

function App() {
  const renderUI = () => {
    return (
      <>
      <Navbar />
      <div className="container-image">
          <img src={APPIMAGE.EMOJI} alt='' className='image-emoji'/>
      </div>
      <div className="container-p">
          <p className="text-name">
            Hola, Soy Jorginho Ojeda 🤟
          </p>
      </div>
      <div className="container-p">
          <p className="text-content">
            Desarrollador de productos digitales web y movil.
          </p>
      </div>
      </>
    );
  }
  return renderUI();
}

export default App;
