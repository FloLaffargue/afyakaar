# 📂 Structure du Projet Af Yakaar

## 🌳 Arborescence Complète

```
afyakaar/
│
├── 📄 Documentation
│   ├── README.md                    # Documentation principale
│   ├── DEMARRAGE_RAPIDE.md         # Guide de démarrage
│   ├── GUIDE_ACTUALITES.md         # Guide pour ajouter des actualités
│   ├── EXEMPLES_ACTUALITES.md      # Exemples d'actualités
│   ├── DEPLOIEMENT.md              # Guide de déploiement
│   ├── RESUME_PROJET.md            # Résumé du projet
│   └── STRUCTURE_PROJET.md         # Ce fichier
│
├── ⚙️ Configuration
│   ├── package.json                # Dépendances npm
│   ├── package-lock.json           # Versions exactes des dépendances
│   ├── vite.config.js              # Configuration Vite
│   ├── tailwind.config.js          # Configuration TailwindCSS (couleurs)
│   ├── postcss.config.js           # Configuration PostCSS
│   ├── vercel.json                 # Configuration Vercel
│   ├── netlify.toml                # Configuration Netlify
│   └── .gitignore                  # Fichiers à ignorer par Git
│
├── 🌐 HTML
│   └── index.html                  # Point d'entrée HTML
│
├── 📁 src/ (Code Source)
│   │
│   ├── 📄 Fichiers Principaux
│   │   ├── main.jsx                # Point d'entrée JavaScript
│   │   ├── App.jsx                 # Composant racine + Routing
│   │   └── index.css               # Styles globaux + TailwindCSS
│   │
│   ├── 🧩 components/ (Composants Réutilisables)
│   │   ├── Header.jsx              # En-tête + Navigation
│   │   └── Footer.jsx              # Pied de page + Coordonnées
│   │
│   ├── 📄 pages/ (Pages du Site)
│   │   ├── Home.jsx                # Page d'accueil
│   │   ├── About.jsx               # Qui sommes-nous ?
│   │   ├── Projects.jsx            # Nos Projets
│   │   ├── News.jsx                # Actualités
│   │   └── Contact.jsx             # Contact
│   │
│   └── 📊 data/ (Données)
│       └── newsData.js             # ⭐ Données des actualités (À MODIFIER)
│
├── 📦 node_modules/                # Dépendances (généré automatiquement)
│
├── 🏗️ dist/                        # Build de production (généré par npm run build)
│
└── 📑 Association-humanitaire-au-service-de-lAfrique-1.pdf  # PDF original
```

---

## 🎯 Fichiers Clés à Connaître

### 🔴 Fichiers à Modifier Régulièrement

| Fichier | Usage | Fréquence |
|---------|-------|-----------|
| `src/data/newsData.js` | Ajouter des actualités | **Régulièrement** |

### 🟡 Fichiers à Modifier Occasionnellement

| Fichier | Usage | Quand ? |
|---------|-------|---------|
| `src/pages/Home.jsx` | Modifier la page d'accueil | Si besoin |
| `src/pages/Projects.jsx` | Ajouter/modifier des projets | Nouveaux projets |
| `src/pages/Contact.jsx` | Changer les coordonnées | Changement d'adresse |
| `src/components/Footer.jsx` | Modifier le pied de page | Mise à jour contacts |
| `tailwind.config.js` | Changer les couleurs | Personnalisation |

### 🟢 Fichiers à Ne Pas Modifier

| Fichier | Raison |
|---------|--------|
| `package-lock.json` | Géré automatiquement par npm |
| `node_modules/` | Dépendances installées |
| `dist/` | Build généré automatiquement |
| `src/main.jsx` | Configuration React |
| `vite.config.js` | Configuration du build |

---

## 📊 Détail des Pages

### Page d'Accueil (`src/pages/Home.jsx`)

**Sections :**
1. Hero Section (Titre principal + CTA)
2. Statistiques (66%, 100%, 9 ans)
3. Nos 4 Missions (Éducation, Entrepreneuriat, Santé, Loisirs)
4. Réalisations 2025 (4 cartes)
5. Call-to-Action (Faire un don)

**Lignes de code :** ~180

---

### Page Qui Sommes-Nous (`src/pages/About.jsx`)

**Sections :**
1. Hero Section
2. Informations clés (Fondation, Localisation)
3. Vision et Avantage Fiscal
4. Équipe (3 membres)
5. Domaines d'Action (5 domaines)
6. Citation

**Lignes de code :** ~150

---

### Page Projets (`src/pages/Projects.jsx`)

**Sections :**
1. Hero Section
2. Projets 2026 (4 projets)
3. Impact Éducation (École de danse)
4. Soutien Entrepreneurs (3 initiatives)
5. Call-to-Action

**Lignes de code :** ~160

---

### Page Actualités (`src/pages/News.jsx`)

**Sections :**
1. Hero Section
2. Filtres par catégorie (dynamiques)
3. Grille d'actualités (dynamique)
4. Section réseaux sociaux

**Fonctionnalités :**
- ✅ Filtrage par catégorie
- ✅ Tri automatique par date
- ✅ Design en cartes
- ✅ Badges de catégorie colorés

**Lignes de code :** ~120

---

### Page Contact (`src/pages/Contact.jsx`)

**Sections :**
1. Hero Section
2. Coordonnées (4 cartes : Adresse, Téléphone, Email, WhatsApp)
3. Informations Dons (Avantage fiscal, Impact)
4. Réseaux Sociaux
5. Citation

**Lignes de code :** ~140

---

## 🎨 Système de Design

### Couleurs Principales

```javascript
primary: {
  500: '#e68a00',  // Orange/Doré
  600: '#b36b00',  // Orange foncé
}

accent: {
  500: '#00af73',  // Vert
  600: '#008c5c',  // Vert foncé
}
```

### Composants Réutilisables (Classes CSS)

| Classe | Usage |
|--------|-------|
| `.btn-primary` | Bouton principal (orange) |
| `.btn-secondary` | Bouton secondaire (vert) |
| `.card` | Carte avec ombre |
| `.section-title` | Titre de section |
| `.section-subtitle` | Sous-titre de section |

---

## 📱 Responsive Design

Le site s'adapte automatiquement à :

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

**Breakpoints TailwindCSS utilisés :**
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

---

## 🔄 Workflow de Développement

### 1. Développement Local

```bash
npm run dev
```
→ Serveur sur http://localhost:5173
→ Hot reload automatique

### 2. Modification

Éditez les fichiers dans `src/`
→ Le navigateur se recharge automatiquement

### 3. Test

Testez sur :
- Différentes pages
- Différentes tailles d'écran
- Différents navigateurs

### 4. Build

```bash
npm run build
```
→ Génère le dossier `dist/`

### 5. Déploiement

Push sur GitHub → Déploiement automatique (Vercel/Netlify)

---

## 📦 Dépendances Installées

### Production

| Package | Version | Usage |
|---------|---------|-------|
| `react` | ^18.2.0 | Framework UI |
| `react-dom` | ^18.2.0 | Rendu React |
| `react-router-dom` | ^6.20.0 | Navigation |
| `lucide-react` | ^0.294.0 | Icônes |

### Développement

| Package | Version | Usage |
|---------|---------|-------|
| `vite` | ^5.0.8 | Build tool |
| `@vitejs/plugin-react` | ^4.2.1 | Plugin React pour Vite |
| `tailwindcss` | ^3.3.6 | Framework CSS |
| `autoprefixer` | ^10.4.16 | Préfixes CSS |
| `postcss` | ^8.4.32 | Transformation CSS |

**Taille totale :** ~175 packages (~50 MB)

---

## 🎯 Points d'Entrée

### Développement
```
http://localhost:5173
```

### Production (après build)
```
dist/index.html
```

### Déploiement
```
https://afyakaar.vercel.app (exemple)
https://afyakaar.org (votre domaine)
```

---

## 📈 Statistiques du Projet

- **Pages :** 5
- **Composants :** 7 (2 composants + 5 pages)
- **Lignes de code (src/) :** ~900
- **Fichiers de documentation :** 7
- **Actualités pré-remplies :** 4
- **Temps de chargement :** < 1 seconde
- **Score Lighthouse estimé :** 90+

---

## 🔍 Où Trouver Quoi ?

### Je veux modifier...

| Quoi | Fichier |
|------|---------|
| Les actualités | `src/data/newsData.js` |
| La page d'accueil | `src/pages/Home.jsx` |
| Les projets | `src/pages/Projects.jsx` |
| Les coordonnées | `src/pages/Contact.jsx` + `src/components/Footer.jsx` |
| Le menu | `src/components/Header.jsx` |
| Les couleurs | `tailwind.config.js` |
| Le titre du site | `index.html` |

### Je veux ajouter...

| Quoi | Action |
|------|--------|
| Une actualité | Modifier `src/data/newsData.js` |
| Une page | Créer dans `src/pages/` + ajouter route dans `App.jsx` |
| Un composant | Créer dans `src/components/` |
| Une image | Placer dans `public/images/` |

---

## ✅ Checklist de Vérification

Avant de déployer, vérifiez :

- [ ] Le site fonctionne en local (`npm run dev`)
- [ ] Toutes les pages sont accessibles
- [ ] Les actualités s'affichent correctement
- [ ] Le responsive fonctionne (mobile, tablette, desktop)
- [ ] Les liens de contact sont corrects
- [ ] Les liens réseaux sociaux sont à jour
- [ ] Le build fonctionne (`npm run build`)
- [ ] Aucune erreur dans la console

---

**📚 Pour plus d'informations, consultez les autres fichiers de documentation !**
