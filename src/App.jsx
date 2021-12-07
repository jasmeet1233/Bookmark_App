import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SideBAr from './components/SideBar';

function App() {
  return (
    <div className="h-full bg-gray-100">
      <Home />
    </div>
  );
}

export default App
