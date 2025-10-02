# 🚀 Guide de déploiement sur GitHub Pages

Ce guide vous accompagne pas à pas pour publier votre CV en ligne gratuitement avec GitHub Pages.

## 📋 Prérequis

- Un compte GitHub ([créer un compte](https://github.com/signup))
- Git installé sur votre ordinateur ([télécharger Git](https://git-scm.com/downloads))
- Votre CV portfolio prêt

## 🎯 Étape 1 : Créer un dépôt GitHub

### Option A : Dépôt de projet standard

1. Allez sur [GitHub](https://github.com)
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Remplissez :
   - **Repository name** : `cv-portfolio` (ou autre nom)
   - **Description** : `Mon CV interactif en ligne`
   - **Public** (pour GitHub Pages gratuit)
   - Ne cochez PAS "Add a README" (vous en avez déjà un)
4. Cliquez sur **Create repository**

### Option B : Dépôt utilisateur (URL plus courte)

1. Créez un dépôt nommé **exactement** : `votreusername.github.io`
   - Remplacez `votreusername` par votre nom d'utilisateur GitHub
2. Votre site sera accessible à : `https://votreusername.github.io/`
3. ⚠️ Vous ne pouvez avoir qu'un seul dépôt utilisateur

## 🔧 Étape 2 : Initialiser Git localement

Ouvrez **PowerShell** ou **Git Bash** dans le dossier `GenCV` :

```bash
# Initialiser le dépôt Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - CV Portfolio"

# Renommer la branche en 'main'
git branch -M main
```

## 🔗 Étape 3 : Lier votre dépôt local à GitHub

```bash
# Remplacez 'votreusername' et 'cv-portfolio' par vos valeurs
git remote add origin https://github.com/votreusername/cv-portfolio.git

# Vérifier que le remote est bien configuré
git remote -v
```

## ⬆️ Étape 4 : Pousser votre code sur GitHub

```bash
# Pousser le code
git push -u origin main
```

Si c'est votre première fois, Git vous demandera de vous authentifier :
- **Username** : votre nom d'utilisateur GitHub
- **Password** : utilisez un **Personal Access Token** (voir ci-dessous)

### Créer un Personal Access Token (si nécessaire)

1. GitHub → **Settings** (votre profil)
2. **Developer settings** (tout en bas)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Cochez : `repo` (tous les sous-éléments)
6. **Generate token**
7. **Copiez et sauvegardez** le token (vous ne le reverrez plus !)
8. Utilisez ce token comme mot de passe dans Git

## 🌐 Étape 5 : Activer GitHub Pages

### Méthode 1 : Via l'interface web

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (⚙️)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source** :
   - Branch : `main`
   - Folder : `/root` (ou `/` selon l'interface)
5. Cliquez sur **Save**
6. ✅ Votre site sera disponible dans ~2-5 minutes

### Méthode 2 : Branche gh-pages (alternative)

```bash
# Créer une branche gh-pages
git checkout -b gh-pages

# Pousser la branche
git push origin gh-pages

# Retourner sur main
git checkout main
```

Puis dans Settings → Pages, sélectionnez la branche `gh-pages`.

## 🎉 Étape 6 : Accéder à votre site

Votre CV est maintenant en ligne !

### URL selon le type de dépôt

**Dépôt de projet** :
```
https://votreusername.github.io/cv-portfolio/
```

**Dépôt utilisateur** :
```
https://votreusername.github.io/
```

GitHub affichera l'URL exacte dans **Settings → Pages**.

## 🔄 Mettre à jour votre CV

Après des modifications :

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit
git commit -m "Mise à jour de l'expérience professionnelle"

# Pousser les changements
git push origin main
```

⏱️ Les changements apparaîtront en ligne dans ~1-2 minutes.

## 🌍 Domaine personnalisé (optionnel)

### Acheter un nom de domaine

1. Achetez un domaine chez :
   - [Namecheap](https://www.namecheap.com/)
   - [Google Domains](https://domains.google/)
   - [OVH](https://www.ovh.com/)
   - [Gandi](https://www.gandi.net/)

### Configurer le domaine

#### Sur GitHub

1. Settings → Pages → Custom domain
2. Entrez votre domaine (ex: `maxime-venayre.com`)
3. Cliquez sur **Save**
4. Cochez **Enforce HTTPS** (après propagation DNS)

#### Chez votre registrar (fournisseur de domaine)

Ajoutez ces enregistrements DNS :

**Pour un domaine racine (maxime-venayre.com)** :
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**Pour un sous-domaine (www.maxime-venayre.com)** :
```
Type: CNAME
Host: www
Value: votreusername.github.io
```

⏱️ La propagation DNS prend 1h à 48h (généralement quelques heures).

### Créer un fichier CNAME

Dans votre projet, créez un fichier `CNAME` (sans extension) :

```
maxime-venayre.com
```

Puis :
```bash
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

## 🔒 HTTPS (SSL)

GitHub Pages fournit **HTTPS gratuit** automatiquement :
- Pour les domaines `.github.io` : immédiat
- Pour les domaines personnalisés : activez dans Settings après propagation DNS

## 📊 Analytics (optionnel)

### Google Analytics

1. Créez un compte [Google Analytics](https://analytics.google.com/)
2. Obtenez votre ID de suivi (ex: `G-XXXXXXXXXX`)
3. Ajoutez avant `</head>` dans `index.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Résolution de problèmes

### Le site n'apparaît pas

- ✅ Vérifiez que GitHub Pages est activé (Settings → Pages)
- ✅ Attendez 5 minutes pour le premier déploiement
- ✅ Vérifiez que `index.html` est à la racine du dépôt
- ✅ Vérifiez la branche sélectionnée (main ou gh-pages)

### Erreur 404

- ✅ L'URL est-elle correcte ? (avec ou sans nom de projet)
- ✅ Le fichier `index.html` existe-t-il ?
- ✅ Videz le cache de votre navigateur (Ctrl+F5)

### Les changements n'apparaissent pas

- ✅ Avez-vous poussé les changements ? (`git push`)
- ✅ Attendez 1-2 minutes
- ✅ Videz le cache du navigateur

### Problème de chemins CSS/JS

Si les styles ne se chargent pas, vérifiez les chemins dans `index.html` :

```html
<!-- Chemins relatifs (recommandé) -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

<!-- Pas de slash au début -->
```

### Domaine personnalisé ne fonctionne pas

- ✅ Attendez la propagation DNS (jusqu'à 48h)
- ✅ Vérifiez les enregistrements DNS avec [DNS Checker](https://dnschecker.org/)
- ✅ Le fichier `CNAME` doit être à la racine
- ✅ Pas de `http://` ou `https://` dans le fichier CNAME

## 📚 Ressources supplémentaires

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Guide Git officiel](https://git-scm.com/book/fr/v2)
- [Forum GitHub Community](https://github.community/)

## ✅ Checklist finale

Avant de publier :

- [ ] Vérifiez que toutes les informations sont à jour
- [ ] Testez le site en local
- [ ] Vérifiez la responsivité (mobile/tablette)
- [ ] Testez tous les liens
- [ ] Vérifiez l'orthographe
- [ ] Optimisez les images (si vous en ajoutez)
- [ ] Ajoutez des meta tags pour le SEO
- [ ] Testez sur différents navigateurs

---

🎉 **Félicitations !** Votre CV est maintenant en ligne et accessible au monde entier !

Si vous rencontrez des problèmes, n'hésitez pas à consulter la [documentation GitHub Pages](https://docs.github.com/en/pages) ou à ouvrir une issue sur le dépôt.

