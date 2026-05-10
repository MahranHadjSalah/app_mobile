import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Confirmation() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const service   = state?.service   || 'voiture';
  const matricule = state?.matricule || '—';
  const marque    = state?.marque    || '—';
  const nom       = state?.nom       || '—';
  const telephone = state?.telephone || '—';
  const cin       = state?.cin       || '—';

  return (
    <div className="confirm-screen">
      {/* Header with Back Button */}
      <div className="back-btn-header">
        <button className="back-circle" onClick={() => navigate('/')}>
          ←
        </button>
      </div>

      {/* Success Banner */}
      <div className="confirm-banner">
        Rendez vous reservé
      </div>

      {/* Optional Recap (Styled to be subtle) */}
      <div className="recap-card">
        <div className="recap-row">
          <span className="label">Nom</span>
          <span className="value">{nom}</span>
        </div>
        <div className="recap-row">
          <span className="label">Type</span>
          <span className="value" style={{ textTransform: 'capitalize' }}>{service}</span>
        </div>
        <div className="recap-row">
          <span className="label">Matricule</span>
          <span className="value">{matricule}</span>
        </div>
        <div className="recap-row">
          <span className="label">Marque</span>
          <span className="value">{marque}</span>
        </div>
        <div className="recap-row">
          <span className="label">Téléphone</span>
          <span className="value">{telephone}</span>
        </div>
        <div className="recap-row">
          <span className="label">Statut</span>
          <span className="value">✔ Confirmé</span>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <BottomNav />
    </div>
  );
}
