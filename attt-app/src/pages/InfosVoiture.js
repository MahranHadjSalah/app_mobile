import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function InfosVoiture() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [matricule, setMatricule] = useState('');
  const [marque, setMarque] = useState('');

  const handleNext = () => {
    if (!matricule.trim() || !marque.trim()) return;
    navigate('/formulaire', { 
      state: { 
        ...state, 
        matricule, 
        marque 
      } 
    });
  };

  return (
    <div className="screen">
      {/* Header */}
      <div className="blue-header-with-back">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>Infos de voiture</h2>
      </div>

      <div className="content">
        <div style={{ marginTop: 20 }}>
          {/* Matricule */}
          <div className="form-group">
            <span className="field-icon">🚗</span>
            <input
              type="text"
              placeholder="Matricule"
              value={matricule}
              onChange={(e) => setMatricule(e.target.value)}
            />
          </div>

          <div style={{ height: 16 }} />

          {/* Marque */}
          <div className="form-group">
            <span className="field-icon">🏷️</span>
            <input
              type="text"
              placeholder="Marque"
              value={marque}
              onChange={(e) => setMarque(e.target.value)}
            />
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <button 
          className="btn-next" 
          onClick={handleNext}
          disabled={!matricule.trim() || !marque.trim()}
          style={{ marginBottom: 20 }}
        >
          Suivant
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
