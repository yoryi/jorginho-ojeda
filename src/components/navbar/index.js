import './style.css';

function Navbar() {
  const renderUI = () => {
    return (
      <div className="container-navbar">
        <div>
          <p className="text-email">
            yoryiojeda@outlook.com
          </p>
        </div>

        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <p className="text-select">
            Contactos
          </p>
          <p className="text-select">
            Acerca de mi
          </p>
        </div>
      </div>
    );
  }
  return renderUI();
}

export default Navbar;
