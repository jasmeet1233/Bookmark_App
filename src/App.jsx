import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Navbar />
  )
}

export default App
