import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeersContainer from './components/beers/BeersContainer';
import DetailPageContainer from './components/detail-page/DetailPageContainer';




const App = ({ store }) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
          <Routes>
            <Route path='/' element={<BeersContainer />} />
            <Route path='detail-page/:id' element={<DetailPageContainer />} />
          </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;
