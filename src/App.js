import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';


function App() {

  return (
    < div >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
