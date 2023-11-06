import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';

import Graphical from './Root_of_equations/Graphical';
import Bisection from './Root_of_equations/Bisection';
import Onepoint from './Root_of_equations/Onepoint';
import Secant from './Root_of_equations/Secant';


import Newton from './Interpolation/Newton';
import Lagrange from'./Interpolation/Lagange';

import Gauss_elimination from'./Gauss/Gauss_Elimination';

function App(){
    
    return(
        <div className="App">
        <div className="App-header">
            <h4>Numerical Project</h4>
        </div>
        <div className='App-sidebar'>
        <div className='App-sidebarList'>
        <BrowserRouter>
        <NavBar/>
        <div className='row'>
        <Routes>
            
            <Route path='/Graphical' element={<Graphical/>}/>
            <Route path='/Bisection' element={<Bisection/>}/>
            <Route path='/Onepoint' element={<Onepoint/>}/>
            <Route path='/Secant' element={<Secant/>}/>

            <Route path='/Newton' element={<Newton/>}/>
            <Route path='/Lagrange' element={<Lagrange/>}/>

            <Route path='/Gauss_elimination' element={<Gauss_elimination/>}/>
        
        </Routes>
        </div>
        </BrowserRouter>
        </div>
      </div>
      </div>
    );
}

export default App;