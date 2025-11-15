# Guide de Déploiement

## 🚀 Options de Déploiement

Voici les meilleures options pour mettre votre site en ligne gratuitement :

---

## Option 1 : Vercel (Recommandé) ⭐

**Avantages** : Gratuit, très rapide, déploiement automatique depuis Git

### Étapes :

1. **Créer un compte sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub, GitLab ou email

2. **Pousser votre code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site Af Yakaar"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/afyakaar.git
   git push -u origin main
   ```

3. **Importer le projet sur Vercel**
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Cliquez sur "Deploy"

4. **Votre site sera en ligne en quelques secondes !**
   - Vous obtiendrez une URL : `https://afyakaar.vercel.app`
   - Vous pourrez ensuite configurer votre propre domaine `afyakaar.org`

---

## Option 2 : Netlify

**Avantages** : Gratuit, interface simple, bon support

### Étapes :

1. **Créer un compte sur Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Inscrivez-vous gratuitement

2. **Déployer via GitHub**
   - Poussez votre code sur GitHub (voir étapes ci-dessus)
   - Sur Netlify : "Add new site" > "Import an existing project"
   - Connectez votre repository GitHub

3. **Configuration du build**
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Cliquez sur "Deploy"

---

## Option 3 : GitHub Pages

**Avantages** : Gratuit, intégré à GitHub

### Étapes :

1. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Modifier package.json**
   Ajoutez ces lignes :
   ```json
   {
     "homepage": "https://VOTRE-USERNAME.github.io/afyakaar",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Modifier vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/afyakaar/'  // Ajoutez cette ligne
   })
   ```

4. **Déployer**
   ```bash
   npm run deploy
   ```

---

## 🌐 Configurer votre Domaine Personnalisé (afyakaar.org)

### Sur Vercel :

1. Allez dans les paramètres de votre projet
2. Section "Domains"
3. Ajoutez `afyakaar.org`
4. Suivez les instructions pour configurer vos DNS

### Configuration DNS :

Chez votre registrar de domaine, ajoutez ces enregistrements :

**Pour Vercel :**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Pour Netlify :**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: VOTRE-SITE.netlify.app
```

---

## 📦 Build Local (pour tester)

Avant de déployer, vous pouvez tester le build en local :

```bash
# Créer le build
npm run build

# Prévisualiser le build
npm run preview
```

Le site sera accessible sur `http://localhost:4173`

---

## ✅ Checklist avant déploiement

- [ ] Toutes les actualités sont à jour
- [ ] Les informations de contact sont correctes
- [ ] Les liens vers les réseaux sociaux sont configurés
- [ ] Le site fonctionne correctement en local
- [ ] Les images (si ajoutées) sont optimisées
- [ ] Le fichier README.md est à jour

---

## 🔄 Mises à jour futures

### Avec Vercel ou Netlify (déploiement automatique) :

1. Modifiez vos fichiers localement
2. Commitez et poussez sur GitHub :
   ```bash
   git add .
   git commit -m "Ajout de nouvelles actualités"
   git push
   ```
3. Le site se met à jour automatiquement ! 🎉

### Avec GitHub Pages :

```bash
npm run deploy
```

---

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez les logs de build sur la plateforme
2. Assurez-vous que `npm run build` fonctionne en local
3. Consultez la documentation :
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
   - [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

---

## 💡 Recommandation

**Pour Af Yakaar, je recommande Vercel** car :
- ✅ Déploiement ultra-rapide
- ✅ Configuration automatique du domaine
- ✅ Mises à jour automatiques depuis GitHub
- ✅ Performance optimale
- ✅ Certificat SSL gratuit (HTTPS)
- ✅ Interface intuitive
