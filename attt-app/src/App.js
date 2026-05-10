import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import TypeService from './pages/TypeService';
import Formulaire from './pages/Formulaire';
import InfosVoiture from './pages/InfosVoiture';
import Confirmation from './pages/Confirmation';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="phone-shell">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/service" element={<TypeService />} />
          <Route path="/infos-voiture" element={<InfosVoiture />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
