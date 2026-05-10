# ATTT – Application de Réservation de Visite Technique

Application React fidèle aux maquettes Figma du projet UI/UX.

## Structure du projet

```
attt-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── BottomNav.js       ← Barre de navigation inférieure
│   ├── pages/
│   │   ├── Accueil.js         ← Frame 1  – Page d'accueil
│   │   ├── TypeService.js     ← Frame 8/14/15/16/17 – Choix du service
│   │   ├── Formulaire.js      ← Frame 13 – Informations personnelles
│   │   └── Confirmation.js    ← Frame 18 – Confirmation RDV
│   ├── App.js                 ← Router principal
│   ├── App.css                ← Tous les styles (fidèles au design Figma)
│   └── index.js
├── package.json
└── README.md
```

## Flux de navigation

```
/ (Accueil)
  → bouton "Prendre un Rendez Vous"
    → /service (Type de service)
        → sélection d'une carte + bouton "suivant"
          → /formulaire (Informations personnelles)
              → bouton "valider" (avec validation)
                → /confirmation (Résumé + Confirmation)
                    → bouton "Retour à l'accueil"
                      → / (Accueil)
```

## Installation et lancement

### Prérequis
- Node.js >= 16  →  https://nodejs.org
- npm (inclus avec Node.js)

### Commandes

```bash
# 1. Entrer dans le dossier
cd attt-app

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm start
```

L'application s'ouvre automatiquement sur **http://localhost:3000**

### Build production (optionnel)

```bash
npm run build
```

## Design

| Élément          | Valeur            |
|------------------|-------------------|
| Couleur primaire | `#1A56A0` (bleu)  |
| Couleur accent   | `#22C55E` (vert)  |
| Fond             | `#F5F5F5`         |
| Police           | Plus Jakarta Sans |
| Format           | Mobile 390px      |
