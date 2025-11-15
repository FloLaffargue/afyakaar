# 📸 Intégration des Images - Af Yakaar

## ✅ Modifications Effectuées

Des images thématiques ont été intégrées dans tout le site pour illustrer l'association humanitaire Af Yakaar au Sénégal.

---

## 🎨 Fichier de Configuration

### `src/data/imageData.js`

Un nouveau fichier a été créé pour centraliser toutes les URLs d'images :

- **Images Unsplash** : Utilisation d'images gratuites et libres de droits
- **Thématiques** : Enfants africains, éducation, santé, sport, culture, entrepreneuriat
- **Organisation** : Images classées par page (home, about, projects, contact)

**Avantages** :
- ✅ Gestion centralisée des images
- ✅ Facile à modifier ou remplacer
- ✅ Fonction utilitaire `getImage()` avec fallback

---

## 📄 Pages Modifiées

### 1. **Page d'Accueil** (`src/pages/Home.jsx`)

#### Modifications :
- ✅ **Hero Section** : Image de fond avec enfants africains souriants
  - Overlay gradient pour maintenir la lisibilité du texte
  - Opacité 20% pour l'image de fond
  
- ✅ **Section Réalisations** : 4 cartes avec images
  - Image pour "Aide aux écoles de Saly"
  - Image pour "Tournoi de Pétanque"
  - Image pour "Équipement Sportif"
  - Image pour "École de Danse et Chant"
  - Effet hover avec zoom sur les images

#### Effets visuels :
```css
- Images en hauteur fixe (h-48)
- Effet hover:scale-105 sur les cartes
- Transition smooth sur les transformations
```

---

### 2. **Page À Propos** (`src/pages/About.jsx`)

#### Modifications :
- ✅ **Hero Section** : Image de fond avec équipe/communauté
  - Overlay gradient orange/vert
  
- ✅ **Section principale** : Grande image du Sénégal
  - Bordure arrondie (rounded-xl)
  - Ombre portée (shadow-2xl)
  - Hauteur responsive (h-64 md:h-96)

---

### 3. **Page Projets** (`src/pages/Projects.jsx`)

#### Modifications :
- ✅ **Hero Section** : Image de fond thématique
  
- ✅ **Section Éducation** : Layout en grille avec image
  - Image de l'école de danse à gauche
  - Contenu texte à droite
  - Design responsive (1 colonne sur mobile, 2 sur desktop)
  
- ✅ **Section Entrepreneuriat** : Grande image illustrative
  - Image de l'entrepreneuriat local au Sénégal
  - Positionnée avant les cartes d'initiatives

---

### 4. **Page Contact** (`src/pages/Contact.jsx`)

#### Modifications :
- ✅ **Hero Section** : Image de fond avec communauté
  - Overlay gradient pour lisibilité

---

## 🎯 Thématiques des Images

Les images sélectionnées représentent :

1. **Enfants et Éducation**
   - Enfants africains souriants
   - Salles de classe
   - Activités éducatives

2. **Sport et Loisirs**
   - Activités sportives
   - Pétanque
   - Équipements sportifs

3. **Culture et Arts**
   - Danse africaine
   - Chant et musique
   - Spectacles

4. **Santé et Bien-être**
   - Soins médicaux
   - Centres de santé

5. **Entrepreneuriat**
   - Commerce local
   - Artisanat
   - Marchés

6. **Paysages du Sénégal**
   - Vues panoramiques
   - Communautés locales

---

## 🔄 Comment Modifier les Images

### Option 1 : Modifier les URLs dans `imageData.js`

```javascript
export const images = {
  hero: {
    main: 'VOTRE_NOUVELLE_URL',
    alt: 'Description de l\'image'
  },
  // ...
}
```

### Option 2 : Utiliser des Images Locales

1. Placez vos images dans le dossier `public/images/`
2. Modifiez les URLs dans `imageData.js` :

```javascript
export const images = {
  hero: {
    main: '/images/mon-image.jpg',
    alt: 'Description'
  }
}
```

---

## 📱 Responsive Design

Toutes les images sont **100% responsive** :

- **Mobile** : Images en pleine largeur, hauteur adaptée
- **Tablette** : Grilles 1-2 colonnes
- **Desktop** : Grilles 2-3 colonnes, images plus grandes

### Classes Tailwind utilisées :
```css
- w-full h-full object-cover
- h-48 md:h-64 lg:h-96
- rounded-xl overflow-hidden
- hover:scale-105 transition-transform
```

---

## ⚡ Performance

### Optimisations :
- ✅ Images Unsplash avec paramètres de qualité (`?w=1920&q=80`)
- ✅ Lazy loading natif du navigateur
- ✅ Tailles d'images adaptées au contexte
- ✅ Format WebP automatique via Unsplash

### Tailles recommandées :
- **Hero images** : 1920x1080px
- **Cartes** : 800x600px
- **Miniatures** : 400x300px

---

## 🎨 Effets Visuels

### Overlays
Toutes les sections hero utilisent un overlay gradient :
```css
bg-gradient-to-br from-primary-500/90 via-primary-600/90 to-accent-600/90
```

### Hover Effects
```css
hover:scale-105 transition-transform duration-300
hover:shadow-xl transition-shadow duration-300
```

---

## 🔍 Sources des Images

**Unsplash** : Plateforme d'images gratuites et libres de droits
- Licence : Unsplash License (utilisation gratuite)
- Qualité : Haute résolution
- Thématiques : Afrique, humanitaire, éducation, communauté

---

## 📝 Prochaines Étapes (Optionnel)

### Pour Personnaliser Davantage :

1. **Remplacer par vos propres photos**
   - Photos de vos actions sur le terrain
   - Photos des bénéficiaires
   - Photos des événements

2. **Ajouter une galerie photos**
   - Créer une page dédiée
   - Utiliser un composant lightbox

3. **Optimiser les images locales**
   - Utiliser un outil comme ImageOptim
   - Convertir en WebP
   - Créer des versions responsive

---

## ✅ Checklist de Vérification

- [x] Images intégrées dans toutes les pages
- [x] Overlays pour la lisibilité
- [x] Effets hover fonctionnels
- [x] Design responsive
- [x] Textes alternatifs (alt) présents
- [x] Performance optimisée
- [x] Thématiques cohérentes avec l'association

---

## 🌐 Visualiser les Modifications

Le serveur de développement est en cours d'exécution :

👉 **http://localhost:5173**

Naviguez entre les pages pour voir toutes les images intégrées !

---

**📚 Pour toute question, consultez les autres fichiers de documentation.**

*« Des images qui racontent notre histoire et notre impact »*
