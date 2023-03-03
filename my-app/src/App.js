import React, { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Beers from './components/beers/Beers';
import DetailPage from './components/detail-page/DetailPage';
import Header from './components/header/Header';
import { Container } from '@mui/material';
import { Basket } from "./components/basket/Basket";

const App = () => {

  const [basketOpen, setBasketOpen] = useState(false)
  return (
    <HashRouter>
      <Header handleBasket={() => setBasketOpen(true)}/>
      <Container>
          <Routes>
            <Route path='/' element={<Beers />} />
            <Route path='detail-page/:id' element={<DetailPage />} />
          </Routes>
      </Container> 
      <Basket cardOpen={basketOpen} cardClose={() => setBasketOpen(false)} />
    </HashRouter>
  );
}


export default App;
