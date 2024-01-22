import React from 'react';
import { routesWebsite } from './config'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const renderApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            {NavigateApp()}
          </Routes>
        </BrowserRouter>
    );
  }

  return renderApp();
  
  function NavigateApp() {
    return (
      <Route>
        {routesWebsite.map(RouteWithSubRoutes)}
      </Route>
    )
  }

  function RouteWithSubRoutes(config, index) {
    return (
      <Route
        key={index}
        {...config}
        element={<config.layout render={config.render} />}
      />
    )
  }
}

export default App;
