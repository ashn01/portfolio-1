import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AnimatedRouter from './AnimatedRouter';
import $ from 'jquery'

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{
})

  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="App">
        <AnimatedRouter/>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
