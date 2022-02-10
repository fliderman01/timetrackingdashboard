import React, { useState } from 'react';
import Controllers from './components/Controllers.js';
import Cards from './components/Cards.js';
import data from './data.json';
import './style.css';

export default function App(props) {
  const board = data.cards;
  const [cards] = useState(board);
  const [value, setValue] = useState('weekly');
  return (
    <div className="container">
      <Controllers setValue={setValue} />
      <main>
      {cards.map((i, index) => (
        <Cards key={index} index={index} cards={cards} value={value} />
      ))}
      </main>
    </div>
  );
}
