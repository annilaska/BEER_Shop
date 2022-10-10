import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import BeersContainer from './components/beers/BeersContainer';
import DetailPageContainer from './components/detail-page/DetailPageContainer';
import Header from './components/header/Header';
import { Container } from '@material-ui/core';


const App = ({ store }) => {

  return (
    <HashRouter>
      <Header />
      <Container>
          <Routes>
            <Route path='/' element={<BeersContainer />} />
            <Route path='detail-page/:id' element={<DetailPageContainer />} />
          </Routes>
      </Container>   
    </HashRouter>
  );
}


export default App;
