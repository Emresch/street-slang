// client/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">StreetSlang</Link>
      <div className="space-x-4">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/add">Kelime Ekle</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/login">Giriş</Link>
      </div>
    </nav>
  );
};

export default Navbar;
