import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Newton from './Interpolation/Newton';
import Bisection from './Root_of_equations/Bisection';
import { NavBar } from './NavBar';


function App(){
    
    return(
        <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
        
            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Bisection' element={<Bisection/>}/>
        
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;