import React from 'react';
import './App.css';

export default function App() {

  const lista = [
    { id: '1', name: 'Animals' },
    { id: '2', name: 'Anime' },
    { id: '3', name: 'Anti-Malware' },
    { id: '4', name: 'Art Design' },
    { id: '5', name: 'Books' },
    { id: '6', name: 'Business' },
    { id: '7', name: 'Calendar' },
    { id: '8', name: 'Cloud Storage' },
    { id: '9', name: 'File Sharing' },
    { id: '10', name: 'Continuous Integration' },
    { id: '11', name: 'Cryptocurrency' },
  ];

  return (
    <div>
      Some List:
      <ul>
        {lista.map(listas => (
          <li key={listas.id}>{listas.name}</li>
        ))}
      </ul>
    </div>
  );
}
