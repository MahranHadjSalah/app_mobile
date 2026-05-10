import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      {/* Header banner */}
      <div className="header-banner">
        Réservez votre visite technique<br />
        Rapide, simple et sans file d'attente
      </div>

      <div className="content">
        {/* Info card */}
        <div className="info-card">
          <h3>Pourquoi en ligne ?</h3>
          <p>
            Gagnez du temps en choisissant votre créneau à l'avance
            dans le centre le plus proche.
          </p>
        </div>

        {/* CTA buttons */}
        <button className="btn-primary" onClick={() => navigate('/service')}>
          Prendre un Rendez Vous
        </button>

        <button className="btn-secondary" onClick={() => alert('Fonctionnalité à venir')}>
          Suivre mon dossier
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
