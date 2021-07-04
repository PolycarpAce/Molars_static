import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <HomePage />
      <Navbar />

    </Router>
    
  )
}

export default App;
