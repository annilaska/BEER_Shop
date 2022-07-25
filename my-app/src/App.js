import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeersContainer from './components/beers/BeersContainer';



const App = ({ store }) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
          <Routes>
            <Route path='/' element={<BeersContainer />} />
          </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;
