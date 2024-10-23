import React from 'react';
import Projects from './Projects';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#2C2C2C', minHeight: '100vh' }}>
      {/* Material UI AppBar */}
      <AppBar position="static" sx={{ backgroundColor: '#CC5500', fontFamily: 'Arial, sans-serif' }}>
        <Toolbar>
          <h1 style={{ color: 'white', margin: '0' }}>Main Dashboard Project Managment Page</h1>
        </Toolbar>
      </AppBar>

      {/* Render Projects component */}
      <Projects />
    </div>
  );
}

export default App;
