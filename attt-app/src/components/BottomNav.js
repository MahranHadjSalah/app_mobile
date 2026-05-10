import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { label: 'Accu', icon: '🏠', path: '/' },
    { label: 'RDV',  icon: '📋', path: '/service' },
    { label: 'profil', icon: '👤', path: '/' },
  ];

  return (
    <nav className="bottom-nav">
      {items.map((item) => {
        const isRDV = item.label === 'RDV';
        const isActive = isRDV && pathname !== '/';
        return (
          <button
            key={item.label}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
            {isActive && <span className="nav-active-dot" />}
          </button>
        );
      })}
    </nav>
  );
}
