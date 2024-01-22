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
            contactos
          </p>
          <p className="text-select">
            acerca de mi
          </p>
        </div>
      </div>
    );
  }
  return renderUI();
}

export default Navbar;
