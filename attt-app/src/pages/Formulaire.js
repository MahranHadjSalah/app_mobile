import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const FIELDS = [
  { name: 'nom',       label: 'Nom et prénom', icon: '👤', type: 'text',  placeholder: 'Nom et prénom' },
  { name: 'email',     label: 'Email',          icon: '✉️', type: 'email', placeholder: 'Email' },
  { name: 'telephone', label: 'Téléphone',      icon: '📞', type: 'tel',   placeholder: 'Téléphone' },
  { name: 'cin',       label: 'CIN',            icon: '🪪', type: 'text',  placeholder: 'CIN' },
];

function validate(values) {
  const errors = {};
  if (!values.nom.trim())             errors.nom = 'Ce champ est obligatoire';
  if (!values.email.trim())           errors.email = 'Ce champ est obligatoire';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Adresse email invalide';
  if (!values.telephone.trim())       errors.telephone = 'Ce champ est obligatoire';
  else if (!/^\d{8,}$/.test(values.telephone.replace(/\s/g,'')))
                                      errors.telephone = 'Numéro invalide (min 8 chiffres)';
  if (!values.cin.trim())             errors.cin = 'Ce champ est obligatoire';
  return errors;
}

export default function Formulaire() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const service = state?.service || 'voiture';

  const [values, setValues]   = useState({ nom: '', email: '', telephone: '', cin: '' });
  const [errors, setErrors]   = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (name, value) => {
    setValues(v => ({ ...v, [name]: value }));
    if (touched[name]) {
      const e = validate({ ...values, [name]: value });
      setErrors(prev => ({ ...prev, [name]: e[name] }));
    }
  };

  const handleBlur = (name) => {
    setTouched(t => ({ ...t, [name]: true }));
    const e = validate(values);
    setErrors(prev => ({ ...prev, [name]: e[name] }));
  };

  const handleSubmit = () => {
    const allTouched = Object.fromEntries(FIELDS.map(f => [f.name, true]));
    setTouched(allTouched);
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      navigate('/confirmation', { state: { ...state, ...values } });
    }
  };

  return (
    <div className="screen">
      {/* Progress */}
      <div className="progress-bar">
        <div className="progress-step done" />
        <div className="progress-step done" />
        <div className="progress-step active" />
      </div>
      <div className="progress-label">Étape 2 / 3 — Vos informations</div>

      {/* Header */}
      <div className="header-banner center">Infos personnelles</div>

      <div className="content">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <div className={`form-group ${errors[field.name] && touched[field.name] ? 'error' : ''}`}>
              <span className="field-icon">{field.icon}</span>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={e => handleChange(field.name, e.target.value)}
                onBlur={() => handleBlur(field.name)}
                autoComplete="off"
              />
            </div>
            {errors[field.name] && touched[field.name] && (
              <p className="field-error">⚠ {errors[field.name]}</p>
            )}
          </div>
        ))}

        <button className="btn-next" onClick={handleSubmit}>
          valider
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
