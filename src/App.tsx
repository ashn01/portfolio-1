import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AnimatedRouter from './AnimatedRouter';

import './App.css';

function App() {
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
