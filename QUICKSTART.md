# ⚡ Quick Start - CV Portfolio

Guide rapide pour mettre votre CV en ligne en **moins de 10 minutes**.

## 🚀 3 étapes pour être en ligne

### 1️⃣ Créer un compte GitHub (2 min)

Si vous n'en avez pas déjà un :
- Allez sur [github.com/signup](https://github.com/signup)
- Créez votre compte (gratuit)

### 2️⃣ Créer le dépôt (3 min)

**Option facile** - Via l'interface web :

1. Cliquez sur **+** (en haut à droite) → **New repository**
2. **Repository name** : `cv-portfolio`
3. **Public** ✅
4. Cliquez **Create repository**

### 3️⃣ Pousser votre code (5 min)

Ouvrez **PowerShell** dans le dossier `GenCV` :

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Lier à GitHub (remplacez 'votreusername')
git remote add origin https://github.com/votreusername/cv-portfolio.git

# Pousser le code
git push -u origin main
```

### 4️⃣ Activer GitHub Pages (1 min)

1. Allez sur votre dépôt GitHub
2. **Settings** → **Pages** (menu gauche)
3. **Source** : `main` + `/root`
4. **Save**

✅ **Votre CV est en ligne !** 

URL : `https://votreusername.github.io/cv-portfolio/`

---

## 🔧 Avant de publier

### Personnalisez ces éléments

Dans `README.md`, remplacez :
- `votreusername` par votre nom d'utilisateur GitHub
- `cv-portfolio` par le nom de votre dépôt (si différent)

Dans `index.html`, vérifiez :
- Vos informations de contact
- Vos expériences professionnelles
- Vos compétences

### Testez en local

```bash
# Double-cliquez sur start-server.bat
# OU en ligne de commande :
python -m http.server 8000
```

Ouvrez : `http://localhost:8000`

---

## 📋 Checklist rapide

Avant de publier, vérifiez :

- [ ] Informations personnelles correctes
- [ ] Email et téléphone à jour
- [ ] Expériences professionnelles complètes
- [ ] Orthographe vérifiée
- [ ] Site testé en local
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé

---

## 🆘 Problèmes courants

### "Permission denied" lors du push

**Solution** : Utilisez un Personal Access Token
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token → cochez `repo`
3. Utilisez le token comme mot de passe

### Le site n'apparaît pas

**Solutions** :
- Attendez 2-5 minutes après activation de Pages
- Vérifiez que `index.html` est à la racine
- Videz le cache du navigateur (Ctrl+F5)

### Les styles ne se chargent pas

**Solutions** :
- Vérifiez les chemins dans `index.html` (pas de `/` au début)
- Assurez-vous que tous les fichiers sont poussés

---

## 🎓 Aller plus loin

### Ajouter un domaine personnalisé

1. Achetez un domaine (Namecheap, Google Domains, etc.)
2. GitHub Pages → Custom domain
3. Configurez les DNS (voir [DEPLOYMENT.md](DEPLOYMENT.md))

### Améliorer le SEO

Ajoutez dans `<head>` de `index.html` :

```html
<meta name="description" content="CV de Maxime Venayre - Ingénieur R&D">
<meta name="keywords" content="CV, Ingénieur, R&D, Développeur, Qt, C++">
<meta property="og:title" content="Maxime Venayre - CV">
<meta property="og:description" content="Ingénieur R&D - 20 ans d'expérience">
<meta property="og:image" content="screenshots/desktop.png">
```

### Ajouter Google Analytics

```html
<!-- Avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Mettre à jour votre CV

```bash
# Modifier vos fichiers
# Puis :
git add .
git commit -m "Mise à jour"
git push
```

Les changements apparaissent en 1-2 minutes.

---

## 📚 Documentation complète

- [README.md](README.md) - Documentation complète
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guide de déploiement détaillé
- [STRUCTURE.md](STRUCTURE.md) - Architecture du projet

---

## 💡 Astuces

### Tester sur mobile rapidement

```
http://[VOTRE_IP_LOCALE]:8000
```

Trouvez votre IP : `ipconfig` dans PowerShell

### Partager rapidement

Une fois en ligne, partagez simplement votre URL GitHub Pages !

### Mettre en favoris

Ajoutez votre dépôt GitHub en favoris pour accès rapide.

---

**🎉 Félicitations !** Votre CV est maintenant en ligne et professionnel !

---

💬 Questions ? Consultez [DEPLOYMENT.md](DEPLOYMENT.md) pour plus de détails.

