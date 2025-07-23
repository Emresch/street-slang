
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AddWordPage from './pages/AddWordPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import WordDetailPage from './pages/WordDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
         <div className="text-3xl font-bold text-purple-600">
          Tailwind Artık Aktif!
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddWordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/word/:id" element={<WordDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
