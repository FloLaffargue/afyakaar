# 🚀 Démarrage Rapide

Guide ultra-simple pour utiliser votre nouveau site web Af Yakaar.

---

## ✅ Le Site est Déjà Lancé !

Votre serveur de développement est **actuellement en cours d'exécution**.

👉 **Ouvrez votre navigateur et allez sur :**
```
http://localhost:5173
```

---

## 🎯 Ce que Vous Pouvez Faire Maintenant

### 1. Explorer le Site (2 minutes)

Cliquez sur chaque page du menu :
- **Accueil** - Vue d'ensemble de l'association
- **Qui sommes-nous ?** - Histoire et équipe
- **Nos Projets** - Projets 2026 et réalisations
- **Actualités** - Section des news (filtrable par catégorie)
- **Contact** - Coordonnées et informations dons

### 2. Tester le Responsive (1 minute)

Dans votre navigateur :
1. Appuyez sur **F12** (ouvrir les outils développeur)
2. Cliquez sur l'icône 📱 (mode responsive)
3. Testez différentes tailles d'écran

### 3. Ajouter une Actualité (3 minutes)

**Fichier à modifier :** `src/data/newsData.js`

1. Ouvrez le fichier
2. Ajoutez ceci en haut du tableau `newsData` :

```javascript
{
  id: 5,
  title: 'Ma Première Actualité de Test',
  date: '2025-11-06',
  category: 'Événement',
  excerpt: 'Ceci est un test pour voir comment ajouter une actualité.',
  content: 'Je viens d\'ajouter ma première actualité ! C\'est très simple, il suffit de modifier le fichier newsData.js et le site se met à jour automatiquement.',
  image: null
},
```

3. Sauvegardez le fichier
4. Retournez sur le navigateur → la page se recharge automatiquement
5. Allez sur "Actualités" → votre nouvelle actualité apparaît ! 🎉

---

## 📝 Commandes Essentielles

### Démarrer le Serveur
```bash
npm run dev
```
Le site sera sur http://localhost:5173

### Arrêter le Serveur
Dans le terminal, appuyez sur **Ctrl + C**

### Créer une Version de Production
```bash
npm run build
```
Les fichiers seront dans le dossier `dist/`

### Prévisualiser la Version de Production
```bash
npm run preview
```

---

## 📁 Fichiers Importants à Connaître

### Pour Modifier le Contenu

| Fichier | Contenu |
|---------|---------|
| `src/data/newsData.js` | **Actualités** - Ajoutez vos news ici |
| `src/pages/Home.jsx` | Page d'accueil |
| `src/pages/About.jsx` | Page "Qui sommes-nous ?" |
| `src/pages/Projects.jsx` | Page "Nos Projets" |
| `src/pages/Contact.jsx` | Page Contact |
| `src/components/Footer.jsx` | Pied de page (coordonnées) |

### Documentation

| Fichier | Description |
|---------|-------------|
| `README.md` | Documentation complète |
| `GUIDE_ACTUALITES.md` | Guide détaillé pour les actualités |
| `EXEMPLES_ACTUALITES.md` | Exemples d'actualités à copier |
| `DEPLOIEMENT.md` | Comment mettre le site en ligne |
| `RESUME_PROJET.md` | Vue d'ensemble du projet |

---

## 🎨 Personnalisation Rapide

### Changer les Couleurs

**Fichier :** `tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#e68a00',  // Couleur principale (orange)
    // Modifiez cette valeur
  },
  accent: {
    500: '#00af73',  // Couleur secondaire (vert)
    // Modifiez cette valeur
  }
}
```

### Modifier les Liens Réseaux Sociaux

**Fichiers :**
- `src/components/Footer.jsx` (lignes ~60-75)
- `src/pages/Contact.jsx` (lignes ~120-135)

Remplacez `https://facebook.com` et `https://instagram.com` par vos vrais liens.

---

## 🌐 Mettre le Site en Ligne

### Option Recommandée : Vercel (Gratuit)

1. **Créer un compte** sur [vercel.com](https://vercel.com)

2. **Pousser le code sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Site Af Yakaar"
   git remote add origin VOTRE_URL_GITHUB
   git push -u origin main
   ```

3. **Sur Vercel** :
   - Cliquez "New Project"
   - Importez votre repository GitHub
   - Cliquez "Deploy"
   - ✅ Votre site est en ligne en 2 minutes !

**Guide complet :** Voir `DEPLOIEMENT.md`

---

## ❓ Questions Fréquentes

### Le site ne se charge pas ?
- Vérifiez que le serveur est lancé : `npm run dev`
- Vérifiez l'URL : `http://localhost:5173`

### J'ai modifié un fichier mais rien ne change ?
- Sauvegardez le fichier (Ctrl + S)
- Le navigateur devrait se recharger automatiquement
- Sinon, rafraîchissez manuellement (F5)

### J'ai une erreur après avoir modifié newsData.js ?
- Vérifiez la syntaxe JavaScript :
  - Virgules entre les objets
  - Guillemets fermés
  - Accolades fermées
- Regardez la console du navigateur (F12) pour voir l'erreur

### Comment ajouter une image ?
1. Placez l'image dans `public/images/`
2. Dans newsData.js : `image: '/images/nom-image.jpg'`

---

## 🎯 Prochaines Étapes Suggérées

### Aujourd'hui
- [ ] Explorer toutes les pages du site
- [ ] Tester sur mobile (mode responsive)
- [ ] Ajouter une actualité de test

### Cette Semaine
- [ ] Ajouter 2-3 vraies actualités
- [ ] Mettre à jour les liens réseaux sociaux
- [ ] Vérifier toutes les informations

### Ce Mois-ci
- [ ] Déployer le site en ligne (Vercel)
- [ ] Configurer le domaine afyakaar.org
- [ ] Partager le site avec l'équipe

---

## 🆘 Besoin d'Aide ?

### Documentation
1. Lisez `README.md` pour la vue d'ensemble
2. Consultez `GUIDE_ACTUALITES.md` pour les actualités
3. Voir `DEPLOIEMENT.md` pour la mise en ligne

### Support Technique
- Vérifiez les logs dans le terminal
- Consultez la console du navigateur (F12)
- Relisez les guides de documentation

---

## ✨ Rappel Important

Le site est **100% fonctionnel** et prêt à l'emploi !

Vous pouvez :
- ✅ L'utiliser tel quel
- ✅ Ajouter des actualités facilement
- ✅ Le déployer en ligne immédiatement
- ✅ Le personnaliser selon vos besoins

---

**🎉 Bon développement avec Af Yakaar !**

*« Ensemble, construisons un avenir meilleur pour l'Afrique »*
