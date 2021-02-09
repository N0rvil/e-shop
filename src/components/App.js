import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';

import Navbar from './Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';


const App = () =>{
    return (
        <div className='app'>
            
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/login' exact component={Login} />
                </div>
            </BrowserRouter>
        </div>
    ) 
};

export default App;