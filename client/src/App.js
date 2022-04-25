import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import View from './views/View';

const App = () => { 
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/" /> 
        <Route element={<Create/>} path="/pets/new" />
        <Route element={<View/>} path="/pets/:id"/>
        <Route element={<Update/>} path="/pets/:id/edit"/>
      </Routes>
    </BrowserRouter>
    </div>
    ) 
}

export default App;
