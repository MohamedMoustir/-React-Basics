# Guide React pour Live Coding

## 1. Introduction au live coding

### Présentation de React
React est une bibliothèque JavaScript open-source développée par Facebook pour construire des interfaces utilisateur. Ses principales caractéristiques:
- **Orientée composants**: tout dans React est un composant réutilisable
- **Virtual DOM**: optimise les performances en minimisant les manipulations du DOM réel
- **Flux de données unidirectionnel**: les données circulent du parent vers l'enfant
- **JSX**: extension syntaxique permettant d'écrire du HTML dans du JavaScript

### Structure de l'application
Une application React typique est composée de:
- **Composants**: blocs de construction réutilisables
- **Props**: données passées d'un composant à un autre
- **État**: données maintenues à l'intérieur d'un composant
- **Hooks**: fonctions permettant d'utiliser l'état et d'autres fonctionnalités de React

### Mise en place du projet

#### Avec Vite (Recommandé)
```bash
# Installation
npm create vite@latest my-react-app -- --template react
cd my-react-app

# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev
```

#### Avec Create React App (Alternative)
```bash
# Installation
npx create-react-app my-react-app
cd my-react-app

# Démarrage du serveur de développement
npm start
```

## 2. Card Components Exemple

### Création d'un composant Card de base

```jsx
// src/components/Card.jsx
import React from 'react';
import './Card.css';

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
```

### Utilisation du composant Card

```jsx
// src/App.jsx
import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Mes cartes</h1>
      <div className="card-container">
        <Card 
          image="https://via.placeholder.com/300x200"
          title="Première carte"
          description="Ceci est la description de ma première carte React."
        />
        <Card 
          image="https://via.placeholder.com/300x200"
          title="Deuxième carte"
          description="Une autre carte avec une description différente!"
        />
      </div>
    </div>
  );
}

export default App;
```

## 3. Styles CSS

### Création des styles pour le composant Card

```css
/* src/components/Card.css */
.card {
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 16px;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  margin: 0 0 8px;
  font-size: 20px;
  color: #333;
}

.card-description {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
```

### Styles pour le conteneur

```css
/* src/App.css */
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

h1 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

### Alternative: CSS Modules

Pour utiliser CSS Modules, renommez vos fichiers CSS en `.module.css`:

```jsx
// src/components/Card.jsx avec CSS Modules
import React from 'react';
import styles from './Card.module.css';

function Card({ image, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
```

## 4. Props

### Utilisation des props avec valeurs par défaut

```jsx
// src/components/Card.jsx avec valeurs par défaut
import React from 'react';
import './Card.css';

// Utilisation des paramètres par défaut de JavaScript (au lieu de defaultProps)
function Card({ 
  image = "https://via.placeholder.com/300x200", 
  title = "Titre par défaut", 
  description = "Description par défaut",
  isHighlighted = false
}) {
  return (
    <div className={`card ${isHighlighted ? 'card-highlighted' : ''}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
```

### Types de Props Courantes

- **Chaînes de caractères**: `title="Mon titre"`
- **Nombres**: `count={42}`
- **Booléens**: `isActive={true}`
- **Objets**: `user={{ name: 'John', age: 30 }}`
- **Tableaux**: `items={[1, 2, 3]}`
- **Fonctions**: `onClick={() => console.log('Cliqué!')}`

## 5. Rendu Conditionnel

### Opérateur ternaire

```jsx
// src/components/Card.jsx avec rendu conditionnel
import React from 'react';
import './Card.css';

function Card({ image, title, description, isHidden }) {
  // Si isHidden est true, ne pas rendre le composant
  return isHidden ? null : (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* Affiche la description seulement si elle existe */}
        {description && <p className="card-description">{description}</p>}
        
        {/* Affiche différents boutons selon une condition */}
        {description.length > 50 
          ? <button className="card-button">Voir plus</button>
          : <button className="card-button">Détails</button>
        }
      </div>
    </div>
  );
}

export default Card;
```

### Opérateur logique && 

```jsx
// Exemple d'utilisation de l'opérateur &&
{isAdmin && <button className="admin-button">Modifier</button>}
```

## 6. Rendu de listes

### Utilisation de Array.map() avec keys

```jsx
// src/App.jsx avec rendu de liste
import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  // Données pour les cartes
  const cardsData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=React",
      title: "Apprendre React",
      description: "Les bases de React pour les débutants"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=JavaScript",
      title: "JavaScript Moderne",
      description: "ES6+ et les nouvelles fonctionnalités"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=CSS",
      title: "CSS Avancé",
      description: "Flexbox, Grid et animations"
    }
  ];

  return (
    <div className="app">
      <h1>Mes cartes</h1>
      <div className="card-container">
        {/* Rendu de la liste avec map() */}
        {cardsData.map(card => (
          <Card 
            key={card.id} // Clé unique importante pour React
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

### Importance des keys

- Les keys doivent être uniques parmi les éléments frères
- De préférence, utilisez des ID stables provenant de vos données
- N'utilisez l'index du tableau qu'en dernier recours (inefficace pour les listes qui changent)

## 7. Événements de clic

### Gestion des événements

```jsx
// src/components/Card.jsx avec événements
import React, { useState } from 'react';
import './Card.css';

function Card({ image, title, description }) {
  // État pour suivre si la carte est développée ou non
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Fonction de gestion du clic
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'card-expanded' : ''}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        
        {/* Description complète ou tronquée selon l'état */}
        <p className="card-description">
          {isExpanded ? description : `${description.substring(0, 50)}...`}
        </p>
        
        {/* Bouton pour développer/réduire la description */}
        <button 
          className="card-button"
          onClick={handleToggleExpand}
        >
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </button>
      </div>
    </div>
  );
}

export default Card;
```

### Styles supplémentaires pour le composant avec expansion

```css
/* Ajout à Card.css */
.card-expanded {
  width: 400px;
}

.card-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
  transition: background-color 0.2s;
}

.card-button:hover {
  background-color: #3570b8;
}
```

### Exemple avec deleteCard

```jsx
// Dans App.jsx
function App() {
  const [cards, setCards] = useState(cardsData);
  
  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };
  
  return (
    <div className="app">
      <h1>Mes cartes</h1>
      <div className="card-container">
        {cards.map(card => (
          <Card 
            key={card.id}
            {...card}
            onDelete={() => deleteCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

// Dans Card.jsx
function Card({ id, image, title, description, onDelete }) {
  // ... autre code
  
  return (
    <div className="card">
      {/* ... autre contenu */}
      <button 
        className="card-delete-button"
        onClick={onDelete}
      >
        Supprimer
      </button>
    </div>
  );
}
```

## Exercices suggérés pour le live coding

1. **Créer un composant Card basique** avec image, titre et description
2. **Ajouter des styles** pour rendre la carte visuellement attrayante
3. **Implémenter un bouton "Like"** qui change d'apparence quand on clique dessus
4. **Ajouter un rendu conditionnel** pour masquer/afficher des éléments de la carte
5. **Créer une liste de cartes** à partir d'un tableau de données
6. **Implémenter une fonction de filtrage** pour afficher certaines cartes selon un critère
7. **Ajouter une fonctionnalité d'expansion** pour afficher plus d'informations

## Conseils pour le live coding

- Décomposez chaque section en étapes claires et faciles à suivre
- Expliquez ce que vous faites à chaque étape
- Montrez les erreurs communes et comment les corriger
- Encouragez les participants à coder avec vous
- Prenez le temps de répondre aux questions
