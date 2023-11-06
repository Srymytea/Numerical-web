import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';

import Graphical from './Root_of_equations/Graphical';
import Bisection from './Root_of_equations/Bisection';
import Onepoint from './Root_of_equations/Onepoint';
import Secant from './Root_of_equations/Secant';


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
            <Route path='/Onepoint' element={<Onepoint/>}/>
            <Route path='/Secant' element={<Secant/>}/>

            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Lagrange' element={<Lagrange/>}/>
        
        </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;