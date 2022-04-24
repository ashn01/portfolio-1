import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';

import Header from './components/header/Header'
import Home from './components/body/Home'
import Project from './components/body/Project'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="App">
          <Routes>
            <Route path="/portfolio-1" element={<Home/>}/>
            <Route path="/portfolio-1/:id" element={<Project/>}/>
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
