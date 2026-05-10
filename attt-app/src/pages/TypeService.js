import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const SERVICES = [
  { id: 'voiture',     label: 'voiture',     icon: '🚗', desc: 'Véhicule léger' },
  { id: 'camion',      label: 'camion',       icon: '🚚', desc: 'Poids lourd' },
  { id: 'motocycle',   label: 'Motocycle',    icon: '🏍️', desc: 'Deux roues' },
  { id: 'particulier', label: 'particulier',  icon: '👤', desc: 'Usage personnel' },
];

export default function TypeService() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (!selected) return;
    navigate('/infos-voiture', { state: { service: selected } });
  };

  return (
    <div className="screen">
      {/* Progress */}
      <div className="progress-bar">
        <div className="progress-step done" />
        <div className="progress-step active" />
        <div className="progress-step" />
      </div>
      <div className="progress-label">Étape 1 / 3 — Choisissez votre type de service</div>

      {/* Header */}
      <div className="header-banner center">Type de service</div>

      <div className="content">
        {/* Service grid */}
        <div className="service-grid">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`service-card ${selected === s.id ? 'selected' : ''}`}
              onClick={() => setSelected(s.id)}
            >
              <span className="icon">{s.icon}</span>
              <span>{s.label}</span>
              <small style={{ fontSize: 11, color: '#94A3B8' }}>{s.desc}</small>
            </div>
          ))}
        </div>

        {/* Feedback si non sélectionné */}
        {!selected && (
          <p style={{ textAlign: 'center', fontSize: 13, color: '#94A3B8' }}>
            Sélectionnez un type de véhicule pour continuer
          </p>
        )}

        <button
          className="btn-next"
          onClick={handleNext}
          disabled={!selected}
        >
          suivant
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
