# 💼 CV Portfolio - Maxime Venayre

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://maximevenayrepro.github.io/cv-portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Description

CV interactif et moderne développé en HTML5, CSS3 et JavaScript vanilla. Ce projet présente mon parcours professionnel d'ingénieur R&D avec 20 ans d'expérience dans les systèmes embarqués, le cloud et le développement d'applications critiques.

### ✨ Caractéristiques principales

- **Design moderne** avec animations fluides et effets visuels
- **Responsive** : adapté à tous les écrans (mobile, tablette, desktop)
- **Performance optimisée** : code vanilla sans framework lourd
- **Animations avancées** : parallax, typing effect, scroll animations
- **Glassmorphism** et gradients modernes
- **Navigation fluide** avec smooth scroll
- **Timeline interactive** pour les expériences professionnelles
- **Dark theme** élégant

## 🎯 Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : 
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Gradients & Glassmorphism
  - Media Queries (responsive)
- **JavaScript (Vanilla)** :
  - Typing animation
  - Scroll effects
  - Parallax
  - Intersection Observer API
  - DOM manipulation

### Bibliothèques externes
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Animations au scroll
- [Font Awesome](https://fontawesome.com/) - Icônes
- [Google Fonts](https://fonts.google.com/) - Typographie (Inter)

## 🚀 Démarrage rapide

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Python 3.x (pour le serveur de développement local)

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/maximevenayrepro/cv-portfolio.git
cd cv-portfolio
```

2. Ouvrez `index.html` dans votre navigateur
   
   **OU**

3. Lancez un serveur local :

#### Option 1 : Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2 : Node.js
```bash
npx http-server -p 8000
```

#### Option 3 : Scripts fournis (Windows)
```bash
# Double-cliquez sur start-server.bat
```

4. Accédez à `http://localhost:8000` dans votre navigateur

## 📁 Structure du projet

```
cv-portfolio/
├── index.html              # Page principale
├── styles.css              # Styles CSS
├── script.js               # JavaScript
├── start-server.bat        # Script de lancement Windows
├── allow-firewall.bat      # Configuration pare-feu Windows
├── README.md               # Documentation
├── LICENSE                 # Licence
└── screenshots/            # Captures d'écran (à ajouter)
    ├── desktop.png
    ├── mobile.png
    └── tablet.png
```

## 🌐 Déploiement sur GitHub Pages

### Méthode automatique

1. **Créez un nouveau dépôt GitHub** nommé `cv-portfolio` (ou autre nom)

2. **Poussez votre code** :
```bash
git init
git add .
git commit -m "Initial commit - CV Portfolio"
git branch -M main
git remote add origin https://github.com/maximevenayrepro/cv-portfolio.git
git push -u origin main
```

3. **Activez GitHub Pages** :
   - Allez dans les **Settings** de votre dépôt
   - Section **Pages** (menu de gauche)
   - Source : sélectionnez la branche `main` et dossier `/root`
   - Cliquez sur **Save**

4. **Accédez à votre site** :
   - Votre CV sera disponible à : `https://maximevenayrepro.github.io/cv-portfolio/`
   - Le déploiement prend ~2-5 minutes

### Utiliser un domaine personnalisé (optionnel)

1. Achetez un nom de domaine (ex: maxime-venayre.com)
2. Dans les paramètres GitHub Pages, ajoutez votre domaine personnalisé
3. Configurez les DNS de votre domaine :
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
   ```

## 🎨 Personnalisation

### Modifier les couleurs
Dans `styles.css`, modifiez les variables CSS :
```css
:root {
    --primary-color: #3b82f6;      /* Bleu principal */
    --secondary-color: #8b5cf6;    /* Violet */
    --accent-color: #ec4899;       /* Rose */
    /* ... */
}
```

### Ajouter du contenu
Dans `index.html`, modifiez les sections selon vos besoins.

### Ajuster les animations
Dans `script.js`, personnalisez les durées et effets :
```javascript
AOS.init({
    duration: 1000,  // Durée des animations
    once: false,     // Animation à chaque scroll
    offset: 100      // Offset de déclenchement
});
```

## 📸 Captures d'écran

### Desktop
![Desktop View](screenshots/desktop.png)

### Mobile
![Mobile View](screenshots/mobile.png)

## 🔧 Développement

### Améliorations futures possibles
- [ ] Mode sombre/clair toggle
- [ ] Multilingue (FR/EN)
- [ ] Formulaire de contact fonctionnel
- [ ] Section blog/articles
- [ ] Galerie de projets avec filtres
- [ ] Téléchargement PDF du CV
- [ ] Analytics (Google Analytics)

### Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :
1. Forker le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commiter vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Maxime Venayre**
- Email: maxime.venayre.pro@gmail.com
- LinkedIn: [Votre profil LinkedIn](https://linkedin.com/in/votreprofil)
- GitHub: [@maximevenayrepro](https://github.com/maximevenayrepro)

## 🙏 Remerciements

- [AOS Library](https://michalsnik.github.io/aos/) pour les animations
- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts](https://fonts.google.com/) pour la typographie

## 📊 Statistiques du projet

![GitHub repo size](https://img.shields.io/github/repo-size/maximevenayrepro/cv-portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/maximevenayrepro/cv-portfolio)
![GitHub stars](https://img.shields.io/github/stars/maximevenayrepro/cv-portfolio?style=social)

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !

