import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';

import Graphical from './Root_of_equations/Graphical';
import Bisection from './Root_of_equations/Bisection';

import Newton from './Interpolation/Newton';
import Lagrange from './Interpolation/Lagange';

function App(){
    
    return(
        <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>

            <Route path='/Graphical' element={<Graphical/>}/>
            <Route path='/Bisection' element={<Bisection/>}/>

            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Lagrange' element={<Lagrange/>}/>
        
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;