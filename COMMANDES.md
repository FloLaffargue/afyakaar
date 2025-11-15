# 🛠️ Commandes Utiles - Af Yakaar

Guide de référence rapide pour toutes les commandes du projet.

---

## 🚀 Commandes de Base

### Démarrer le Serveur de Développement
```bash
npm run dev
```
- Lance le serveur sur `http://localhost:5173`
- Hot reload automatique
- Affiche les erreurs en temps réel

### Arrêter le Serveur
```
Ctrl + C
```
Dans le terminal où le serveur tourne.

---

## 📦 Commandes de Build

### Créer un Build de Production
```bash
npm run build
```
- Génère le dossier `dist/`
- Code minifié et optimisé
- Prêt pour le déploiement

### Prévisualiser le Build
```bash
npm run preview
```
- Lance un serveur local avec le build de production
- Accessible sur `http://localhost:4173`
- Permet de tester avant déploiement

---

## 📦 Gestion des Dépendances

### Installer les Dépendances
```bash
npm install
```
- À faire après avoir cloné le projet
- Installe tous les packages dans `package.json`

### Mettre à Jour les Dépendances
```bash
npm update
```
- Met à jour les packages vers les dernières versions compatibles

### Vérifier les Vulnérabilités
```bash
npm audit
```
- Affiche les problèmes de sécurité

### Corriger les Vulnérabilités
```bash
npm audit fix
```
- Corrige automatiquement les problèmes mineurs

---

## 🔍 Commandes de Vérification

### Vérifier la Syntaxe (si ESLint configuré)
```bash
npm run lint
```

### Formater le Code (si Prettier configuré)
```bash
npm run format
```

---

## 🌐 Commandes Git

### Initialiser Git
```bash
git init
```

### Ajouter Tous les Fichiers
```bash
git add .
```

### Créer un Commit
```bash
git commit -m "Votre message de commit"
```

### Ajouter un Remote
```bash
git remote add origin https://github.com/VOTRE-USERNAME/afyakaar.git
```

### Pousser sur GitHub
```bash
git push -u origin main
```

### Vérifier le Statut
```bash
git status
```

### Voir l'Historique
```bash
git log --oneline
```

---

## 🚀 Commandes de Déploiement

### Déployer sur Vercel (si CLI installé)
```bash
vercel
```

### Déployer sur Netlify (si CLI installé)
```bash
netlify deploy
```

### Déployer sur GitHub Pages
```bash
npm run deploy
```
(Nécessite configuration dans package.json)

---

## 📁 Commandes de Fichiers

### Lister les Fichiers
```bash
ls -la
```

### Voir l'Arborescence
```bash
tree -L 2 -I 'node_modules|dist'
```

### Voir la Taille des Dossiers
```bash
du -sh *
```

### Compter les Lignes de Code
```bash
find src -name '*.jsx' -o -name '*.js' | xargs wc -l
```

---

## 🔧 Commandes de Développement

### Ouvrir dans VS Code
```bash
code .
```

### Nettoyer le Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Nettoyer le Build
```bash
rm -rf dist
```

---

## 🌐 Commandes Réseau

### Vérifier si le Port 5173 est Utilisé
```bash
lsof -ti:5173
```

### Tuer le Processus sur le Port 5173
```bash
kill -9 $(lsof -ti:5173)
```

### Tester l'Accès au Site
```bash
curl http://localhost:5173
```

---

## 📊 Commandes d'Analyse

### Analyser la Taille du Build
```bash
npm run build
du -sh dist/*
```

### Voir les Dépendances Installées
```bash
npm list --depth=0
```

### Voir les Packages Obsolètes
```bash
npm outdated
```

---

## 🎨 Commandes TailwindCSS

### Générer le CSS (si besoin)
```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css
```

### Purger le CSS Inutilisé
Automatique avec `npm run build`

---

## 📝 Workflow Complet

### Premier Lancement
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur
npm run dev

# 3. Ouvrir le navigateur
# http://localhost:5173
```

### Développement Quotidien
```bash
# 1. Lancer le serveur
npm run dev

# 2. Modifier les fichiers dans src/

# 3. Le navigateur se recharge automatiquement
```

### Avant de Déployer
```bash
# 1. Tester le build
npm run build

# 2. Prévisualiser
npm run preview

# 3. Vérifier que tout fonctionne
# http://localhost:4173

# 4. Commit et push
git add .
git commit -m "Prêt pour déploiement"
git push
```

---

## 🔄 Workflow Git Complet

### Première Fois
```bash
git init
git add .
git commit -m "Initial commit - Site Af Yakaar"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/afyakaar.git
git push -u origin main
```

### Mises à Jour Régulières
```bash
# 1. Modifier vos fichiers

# 2. Vérifier les changements
git status

# 3. Ajouter les fichiers modifiés
git add .

# 4. Créer un commit
git commit -m "Ajout de nouvelles actualités"

# 5. Pousser sur GitHub
git push
```

---

## 🆘 Commandes de Dépannage

### Le Serveur ne Démarre Pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur de Port Déjà Utilisé
```bash
# Tuer le processus
kill -9 $(lsof -ti:5173)
# Relancer
npm run dev
```

### Build qui Échoue
```bash
# Nettoyer le cache
rm -rf dist node_modules
npm install
npm run build
```

### Git Push Refusé
```bash
# Récupérer les changements distants
git pull origin main
# Résoudre les conflits si nécessaire
# Puis pousser
git push
```

---

## 📚 Commandes de Documentation

### Générer la Documentation (si configuré)
```bash
npm run docs
```

### Lire le README
```bash
cat README.md
```

### Voir Tous les Fichiers Markdown
```bash
ls *.md
```

---

## 🎯 Raccourcis Utiles

### Tout en Une Commande

#### Nettoyer et Redémarrer
```bash
rm -rf node_modules package-lock.json dist && npm install && npm run dev
```

#### Build et Preview
```bash
npm run build && npm run preview
```

#### Commit Rapide
```bash
git add . && git commit -m "Update" && git push
```

---

## 📱 Commandes Spécifiques au Projet

### Ajouter une Actualité (Manuel)
```bash
# Ouvrir le fichier des actualités
nano src/data/newsData.js
# ou
code src/data/newsData.js
```

### Modifier les Couleurs
```bash
# Ouvrir la config Tailwind
nano tailwind.config.js
# ou
code tailwind.config.js
```

### Voir les Logs du Serveur
```bash
# Les logs s'affichent automatiquement dans le terminal
# où vous avez lancé npm run dev
```

---

## 🔐 Commandes de Sécurité

### Vérifier les Vulnérabilités
```bash
npm audit
```

### Mettre à Jour les Packages de Sécurité
```bash
npm audit fix
```

### Forcer les Mises à Jour (attention)
```bash
npm audit fix --force
```

---

## 📊 Commandes de Performance

### Analyser la Taille du Bundle
```bash
npm run build
ls -lh dist/assets/
```

### Mesurer le Temps de Build
```bash
time npm run build
```

---

## 🎓 Aide et Documentation

### Aide npm
```bash
npm help
```

### Aide Vite
```bash
npx vite --help
```

### Aide Git
```bash
git --help
```

### Voir la Version de Node
```bash
node --version
```

### Voir la Version de npm
```bash
npm --version
```

---

## ✅ Checklist de Commandes

### Avant de Commencer
- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Ouvrir http://localhost:5173

### Pendant le Développement
- [ ] Modifier les fichiers
- [ ] Sauvegarder (Ctrl+S)
- [ ] Vérifier le navigateur

### Avant de Déployer
- [ ] `npm run build`
- [ ] `npm run preview`
- [ ] Tester toutes les pages
- [ ] `git add .`
- [ ] `git commit -m "Message"`
- [ ] `git push`

---

## 🎯 Commandes par Cas d'Usage

### Je veux développer localement
```bash
npm run dev
```

### Je veux ajouter une actualité
```bash
code src/data/newsData.js
# Modifier et sauvegarder
```

### Je veux déployer
```bash
npm run build
git add .
git commit -m "Ready for deployment"
git push
```

### Je veux changer les couleurs
```bash
code tailwind.config.js
# Modifier et sauvegarder
```

### J'ai un problème
```bash
rm -rf node_modules
npm install
npm run dev
```

---

**💡 Conseil :** Gardez ce fichier sous la main pour référence rapide !
