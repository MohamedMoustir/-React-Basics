import React from "react";
import Card from "./pages/Card";

const data = [
  {
    title: 'React',
    description: 'Une bibliothèque JavaScript pour construire des interfaces dynamiques.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    title: 'Vite',
    description: 'Un bundler rapide pour projets modernes.',
    imageUrl: 'https://vitejs.dev/logo-with-shadow.png',
  },
  {
    title: 'Tailwind CSS',
    description: 'Un framework CSS utilitaire pour créer des designs rapides.',
    imageUrl: 'https://vitejs.dev/logo-with-shadow.png',
  },
];


export default function App() {
  return (
    <div>
      {
        data.map((item, index) => {
          return (
            <Card
            key = {index}
            title = {item.title}
            description = {item.description}
            image = {item.imageUrl}
          /> 
          );
         
        })
      }

    </div>
  );
} 