import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import ReactRouterSetup from './pages'

function App() {
  return (
    <>
      <div>
        <ReactRouterSetup />
      </div>
    </>
  );
}

export default App;