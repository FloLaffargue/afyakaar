# Guide : Ajouter des Actualités

## 📝 Comment ajouter une nouvelle actualité

### Étape 1 : Ouvrir le fichier des actualités

Ouvrez le fichier : `src/data/newsData.js`

### Étape 2 : Ajouter votre actualité

Dans le tableau `newsData`, ajoutez un nouvel objet avec les informations suivantes :

```javascript
{
  id: 5,  // ⚠️ IMPORTANT : Utilisez un ID unique (incrémentez le dernier ID)
  title: 'Titre de votre actualité',
  date: '2025-11-06',  // Format : YYYY-MM-DD
  category: 'Événement',  // Voir les catégories ci-dessous
  excerpt: 'Un court résumé de l\'actualité (1-2 phrases)',
  content: 'Le contenu complet de l\'actualité avec tous les détails importants.',
  image: null  // Optionnel : ajoutez une URL d'image si vous en avez une
}
```

### Catégories disponibles

Choisissez parmi ces catégories (respectez l'orthographe exacte) :

- **`'Événement'`** - Pour les événements à venir ou annonces
- **`'Réalisation'`** - Pour les actions accomplies
- **`'Éducation'`** - Pour les projets éducatifs
- **`'Culture'`** - Pour les activités culturelles
- **`'Santé'`** - Pour les actions de santé
- **`'Sport'`** - Pour les événements sportifs

### Exemple complet

```javascript
export const newsData = [
  // ... actualités existantes ...
  
  // Votre nouvelle actualité
  {
    id: 5,
    title: 'Nouvelle école de danse à Dakar',
    date: '2025-11-15',
    category: 'Culture',
    excerpt: 'Ouverture d\'une nouvelle école de danse africaine dans le quartier de Dakar.',
    content: 'Nous sommes ravis d\'annoncer l\'ouverture de notre nouvelle école de danse africaine à Dakar. Cette école accueillera 50 enfants pour des cours hebdomadaires de danse traditionnelle et moderne. Les inscriptions sont ouvertes dès maintenant.',
    image: null
  }
]
```

### Étape 3 : Sauvegarder

Sauvegardez le fichier. Le site se mettra à jour automatiquement si le serveur de développement est en cours d'exécution.

## 🎨 Ajouter une image (optionnel)

Pour ajouter une image à votre actualité :

1. Placez votre image dans le dossier `public/images/`
2. Utilisez le chemin relatif dans le champ `image` :

```javascript
{
  id: 5,
  title: 'Mon actualité',
  // ...
  image: '/images/mon-image.jpg'  // ✅ Chemin vers votre image
}
```

## ⚠️ Points importants

1. **ID unique** : Chaque actualité doit avoir un ID différent
2. **Format de date** : Toujours utiliser le format `YYYY-MM-DD` (ex: 2025-11-06)
3. **Catégorie exacte** : Utilisez exactement l'une des catégories listées ci-dessus
4. **Guillemets** : Échappez les apostrophes avec `\'` dans les textes

## 🔄 Ordre d'affichage

Les actualités sont automatiquement triées par date, de la plus récente à la plus ancienne. Vous n'avez pas besoin de les organiser manuellement.

## 🧪 Tester vos modifications

Après avoir ajouté une actualité :

1. Ouvrez votre navigateur sur `http://localhost:5173`
2. Allez sur la page "Actualités"
3. Vérifiez que votre nouvelle actualité apparaît
4. Testez le filtre par catégorie

## ❓ Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
- Que la syntaxe JavaScript est correcte (virgules, accolades, guillemets)
- Que l'ID est unique
- Que la catégorie est bien orthographiée
- Qu'il n'y a pas d'erreur dans la console du navigateur (F12)
