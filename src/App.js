import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1>pizzazzza</h1>
      <Navbar />
    </Router>
  );
}

export default App;
