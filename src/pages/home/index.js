import {Navbar} from '../../components';
import './style.css';

function App() {
  const renderUI = () => {
    return (
      <>
      <Navbar />
      <div className="container-p">
          <p className="App-link">
            Hola, me soy Jorginho Ojeda
          </p>
      </div>
      <div className="container-p">
          <p className="App-link">
            Hola, me soy Jorginho Ojeda
          </p>
      </div>
      </>
    );
  }
  return renderUI();
}

export default App;
