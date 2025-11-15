# Site Web Af Yakaar

Site web moderne pour l'association humanitaire Af Yakaar - Au service de l'Afrique.

## 🌟 Fonctionnalités

- **Design moderne et responsive** : Interface élégante qui s'adapte à tous les écrans
- **Navigation intuitive** : Menu clair avec 5 sections principales
- **Section Actualités dynamique** : Système simple pour ajouter des actualités au fil de l'eau
- **Informations complètes** : Présentation de l'association, projets, et coordonnées
- **Optimisé SEO** : Métadonnées et structure optimisées pour le référencement

## 📋 Pages du site

1. **Accueil** : Présentation générale, mission, réalisations et statistiques
2. **Qui sommes-nous ?** : Histoire, équipe et domaines d'action
3. **Nos Projets** : Projets 2026, impact éducatif et soutien aux entrepreneurs
4. **Actualités** : Fil d'actualités avec système de filtrage par catégorie
5. **Contact** : Coordonnées et informations pour faire un don

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Lancement en mode développement

```bash
# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour la production

```bash
# Créer une version optimisée pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## 📰 Ajouter des Actualités

Pour ajouter une nouvelle actualité, éditez le fichier `src/data/newsData.js` :

```javascript
{
  id: 5, // Incrémenter l'ID
  title: 'Titre de votre actualité',
  date: '2025-11-06', // Format YYYY-MM-DD
  category: 'Événement', // Événement, Réalisation, Éducation, Culture, Santé, Sport
  excerpt: 'Court résumé de l\'actualité',
  content: 'Contenu complet de l\'actualité avec tous les détails.',
  image: null // Optionnel : URL de l'image
}
```

Les catégories disponibles :
- **Événement** : Pour les événements à venir
- **Réalisation** : Pour les actions accomplies
- **Éducation** : Pour les projets éducatifs
- **Culture** : Pour les activités culturelles
- **Santé** : Pour les actions de santé
- **Sport** : Pour les événements sportifs

## 🎨 Technologies Utilisées

- **React 18** : Framework JavaScript moderne
- **Vite** : Build tool ultra-rapide
- **React Router** : Navigation entre les pages
- **TailwindCSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes

## 📁 Structure du Projet

```
afyakaar/
├── src/
│   ├── components/      # Composants réutilisables (Header, Footer)
│   ├── pages/          # Pages du site
│   ├── data/           # Données (actualités)
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── public/             # Fichiers statiques
├── index.html          # Template HTML
└── package.json        # Dépendances
```

## 🎨 Personnalisation

### Couleurs
Les couleurs du thème peuvent être modifiées dans `tailwind.config.js` :
- **primary** : Orange/doré (couleur principale)
- **accent** : Vert (couleur secondaire)

### Contenu
- **Actualités** : `src/data/newsData.js`
- **Informations de contact** : `src/components/Footer.jsx` et `src/pages/Contact.jsx`
- **Projets** : `src/pages/Projects.jsx`

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px et plus)
- 📱 Tablette (768px et plus)
- 💻 Desktop (1024px et plus)

## 🌐 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- Tout hébergeur supportant les sites statiques

### Exemple avec Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📞 Support

Pour toute question concernant le site web, contactez :
- Email : af.yakaar@outlook.fr
- Téléphone : 06 17 80 82 05

---

**Af Yakaar** - Association humanitaire au service de l'Afrique
*« Ensemble, construisons un avenir meilleur pour l'Afrique »*
