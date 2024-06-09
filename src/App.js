import React from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';


function App() {

  return (
    < div >
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
