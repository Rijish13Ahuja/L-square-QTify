import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';

 function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar>

        </Navbar>
      </StyledEngineProvider>
    </>
  )
}

export default App;
