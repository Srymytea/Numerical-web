import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';

import Newton from './Interpolation/Newton';




function App(){
    
    return(
        <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
        
            <Route path='/Newton' element={<Newton/>}/>
            
        
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;