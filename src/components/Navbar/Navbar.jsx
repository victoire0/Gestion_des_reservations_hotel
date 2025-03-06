import 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Navbar.css';
import Contact from '../Contact/Contact';
import Home from '../Home/Home'; 
import RoomsPage from '../RoomsPage/RoomsPage';

const st = { display: 'flex', alignItems: 'center' };

const Navbar = () => {
  return (
    <>
      {/* Barre de navigation */}

      <header className="header">

        <nav className="navbar" style={st}>
          <Link to="/">Home</Link>
          <Link to="/chambres">Chambres</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Definition des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chambres" element={<RoomsPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </> 
    
  );
};

export default Navbar;
