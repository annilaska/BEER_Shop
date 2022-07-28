import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import BeersContainer from './components/beers/BeersContainer';
import DetailPageContainer from './components/detail-page/DetailPageContainer';




const App = ({ store }) => {

  return (
    <HashRouter>
      <div className="app-wrapper">
        
          <Routes>
            <Route path='/' element={<BeersContainer />} />
            <Route path='detail-page/:id' element={<DetailPageContainer />} />
          </Routes>

      </div>
    </HashRouter>
  );
}


export default App;
