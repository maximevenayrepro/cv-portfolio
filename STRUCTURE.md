# 📁 Structure du projet

Ce document explique l'organisation des fichiers du projet CV Portfolio.

## 🗂️ Architecture

```
cv-portfolio/
│
├── 📄 index.html              # Page principale du CV
├── 🎨 styles.css              # Styles CSS (design, animations, responsive)
├── ⚡ script.js               # JavaScript (animations, interactions)
│
├── 📚 Documentation
│   ├── README.md              # Documentation principale
│   ├── DEPLOYMENT.md          # Guide de déploiement GitHub Pages
│   ├── STRUCTURE.md           # Ce fichier
│   └── LICENSE                # Licence MIT
│
├── 🖼️ screenshots/            # Captures d'écran du site
│   ├── desktop.png            # Vue desktop (à ajouter)
│   ├── tablet.png             # Vue tablette (à ajouter)
│   └── mobile.png             # Vue mobile (à ajouter)
│
├── 🪟 Scripts Windows
│   ├── start-server.bat       # Lance le serveur local
│   └── allow-firewall.bat     # Configure le pare-feu Windows
│
├── 🔧 Configuration
│   ├── .gitignore             # Fichiers à ignorer par Git
│   └── CNAME                  # Domaine personnalisé (optionnel)
│
└── 📝 Anciens fichiers (optionnel)
    ├── cv-print.html          # Version imprimable (optionnel)
    └── cv.txt                 # Version texte (optionnel)
```

## 📄 Détails des fichiers principaux

### index.html

**Rôle** : Structure HTML du CV

**Sections** :
- `<nav>` : Navigation sticky avec menu responsive
- `<section id="hero">` : Bannière d'accueil avec effet typing
- `<section id="profil">` : Présentation personnelle
- `<section id="competences">` : Compétences techniques en cards
- `<section id="experiences">` : Timeline des expériences professionnelles
- `<section id="projets">` : Projets marquants
- `<section id="formation">` : Diplômes et formation
- `<section id="contact">` : Informations de contact
- `<footer>` : Pied de page

**Dépendances externes** :
- Font Awesome (CDN)
- AOS Library (CDN)
- Google Fonts (CDN)

### styles.css

**Rôle** : Styles et design du site

**Organisation** :
1. **Variables CSS** (`:root`) : Couleurs, espacements, ombres
2. **Reset & Base** : Normalisation et styles de base
3. **Navigation** : Menu desktop et mobile
4. **Hero Section** : Bannière avec animations
5. **Sections** : Styles pour chaque section
6. **Composants** : Cards, buttons, tags, timeline
7. **Animations** : Keyframes et transitions
8. **Responsive** : Media queries pour mobile/tablette

**Caractéristiques** :
- CSS Grid & Flexbox pour le layout
- Variables CSS pour la personnalisation facile
- Animations CSS natives
- Glassmorphism et gradients modernes
- Mobile-first approach

### script.js

**Rôle** : Interactivité et animations JavaScript

**Fonctionnalités** :
- **AOS Init** : Initialisation des animations au scroll
- **Navbar** : Effet au scroll, menu burger mobile
- **Typing Animation** : Effet machine à écrire dans le hero
- **Smooth Scroll** : Navigation fluide entre sections
- **Parallax** : Effet de profondeur sur les formes
- **Particles** : Particules animées dans le hero
- **Hover Effects** : Effets 3D sur les cards
- **Ripple Effect** : Effet de vague sur les boutons
- **Timeline** : Animation des points de la timeline
- **Progress Bar** : Barre de progression du scroll
- **Easter Egg** : Message dans la console

**Bibliothèques** :
- AOS (chargé via CDN)
- Vanilla JavaScript (pas de dépendances lourdes)

## 🎯 Fichiers de documentation

### README.md
- Présentation du projet
- Technologies utilisées
- Installation et démarrage
- Personnalisation
- Guide de contribution

### DEPLOYMENT.md
- Guide complet de déploiement sur GitHub Pages
- Configuration du domaine personnalisé
- Résolution de problèmes
- Checklist de publication

### LICENSE
- Licence MIT
- Droits d'utilisation et de modification

## 🖼️ Dossier screenshots/

Pour améliorer votre README, ajoutez des captures d'écran :

### Comment créer les screenshots

1. **Desktop** (1920x1080) :
   - Ouvrez le site en plein écran
   - Scroll vers le haut
   - Capture d'écran : `Win + Shift + S`
   - Enregistrez comme `desktop.png`

2. **Tablet** (768x1024) :
   - Ouvrez DevTools (`F12`)
   - Mode responsive (Ctrl+Shift+M)
   - Sélectionnez iPad
   - Capture et enregistrez comme `tablet.png`

3. **Mobile** (375x667) :
   - DevTools → mode responsive
   - Sélectionnez iPhone SE
   - Capture et enregistrez comme `mobile.png`

### Utilisation dans README.md

```markdown
![Desktop View](screenshots/desktop.png)
![Mobile View](screenshots/mobile.png)
```

## 🪟 Scripts Windows

### start-server.bat
Lance un serveur HTTP local avec Python pour tester le site.

**Usage** :
```bash
# Double-cliquez sur le fichier
```

**Détails** :
- Affiche l'IP locale pour accès réseau
- Ouvre automatiquement le navigateur
- Port : 8000

### allow-firewall.bat
Configure le pare-feu Windows pour autoriser les connexions entrantes.

**Usage** :
```bash
# Clic droit → Exécuter en tant qu'administrateur
```

**Détails** :
- Ajoute une règle pour le port 8000
- Permet l'accès depuis d'autres appareils du réseau local

## 🔧 Fichier .gitignore

Empêche Git de tracker les fichiers inutiles :

**Ignorés** :
- Fichiers système (`.DS_Store`, `Thumbs.db`)
- Fichiers IDE (`.vscode`, `.idea`)
- Fichiers temporaires (`*.tmp`, `*.log`)
- Dépendances Node.js (`node_modules/`)
- Cache Python (`__pycache__/`)

## 📝 Fichier CNAME (optionnel)

Si vous utilisez un domaine personnalisé.

**Contenu** :
```
votre-domaine.com
```

**Emplacement** : Racine du projet

## 🎨 Personnalisation

### Changer les couleurs

Dans `styles.css`, modifiez les variables :

```css
:root {
    --primary-color: #3b82f6;      /* Votre couleur principale */
    --secondary-color: #8b5cf6;    /* Couleur secondaire */
    --accent-color: #ec4899;       /* Couleur d'accentuation */
}
```

### Modifier le contenu

Dans `index.html`, éditez directement les sections.

### Ajuster les animations

Dans `script.js`, paramétrez AOS :

```javascript
AOS.init({
    duration: 1000,    // Durée des animations (ms)
    once: false,       // Une seule animation ou répétées
    offset: 100        // Offset de déclenchement (px)
});
```

## 📊 Performance

### Optimisations appliquées

✅ **CSS** :
- Pas de framework lourd (Bootstrap, Tailwind)
- CSS natif optimisé
- Utilisation de `will-change` pour les animations

✅ **JavaScript** :
- Vanilla JS (pas de jQuery)
- Seule librairie externe : AOS (légère)
- Event delegation
- Intersection Observer API

✅ **HTML** :
- Structure sémantique
- Pas d'images lourdes (utilisation d'icônes)
- Lazy loading si images ajoutées

✅ **Réseau** :
- CDN pour les bibliothèques externes
- Compression GZIP activée sur GitHub Pages
- HTTP/2 sur GitHub Pages

### Score Lighthouse visé

- **Performance** : 95+
- **Accessibility** : 95+
- **Best Practices** : 95+
- **SEO** : 90+

## 🚀 Évolutions futures

### Améliorations possibles

- [ ] Mode sombre/clair avec toggle
- [ ] Version multilingue (FR/EN)
- [ ] Formulaire de contact fonctionnel avec backend
- [ ] Section blog/articles
- [ ] Téléchargement PDF du CV
- [ ] Animations plus complexes (Three.js, WebGL)
- [ ] PWA (Progressive Web App)
- [ ] Tests automatisés

### Structure si projet évolue

```
cv-portfolio/
├── src/                       # Sources
│   ├── js/                    # Scripts JS modulaires
│   ├── css/                   # Styles CSS modulaires
│   └── assets/                # Images, fonts
├── dist/                      # Build de production
├── tests/                     # Tests
├── docs/                      # Documentation
└── tools/                     # Scripts utilitaires
```

## 📖 Ressources

- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [AOS Library Documentation](https://michalsnik.github.io/aos/)
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

📌 **Note** : Cette structure est optimisée pour un projet simple et performant. Elle peut évoluer selon vos besoins futurs.

