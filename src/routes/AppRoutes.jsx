import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Waitlist from '../pages/Waitlist';


const AppRoutes = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} /> 
            <Route path='/join' element={<Waitlist />} /> 
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default AppRoutes;