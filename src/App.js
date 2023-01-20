
import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import BlockA from './components/pages/BlockA';
import BlockE from './components/pages/BlockE';
import Blocks from './components/pages/Blocks';
import ContactUs from './components/pages/ContactUs';
import Signup from './Signup';
import Home from './components/pages/Home';
import Events from './components/pages/Events';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blockA' element={<BlockA/>}/>
      <Route path='/blockE' element={<BlockE/>}/>
      <Route path='/blocks' element={<Blocks/>}/>
      <Route path='/contact' element={<ContactUs/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
  </Router>
  );
}

export default App;