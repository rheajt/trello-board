import React, { useState } from 'react';
import './App.css';
import Column from './components/Column';

const initialCards = [
  {
    id: Date.now(),
    column: 0,
    content: 'lorem ipsum',
  },
];

const columns = [
  { title: 'First', color: '#8E6E95' },
  { title: 'Second', color: '#39A59C' },
  { title: 'Third', color: '#344759' },
  { title: 'Fourth', color: '#E8741E' },
];

function App() {
  const [cards, setCards] = useState(initialCards);

  function addCard(column) {
    const cardContent = prompt('Card text');

    const updatedCards = [
      ...cards,
      {
        id: Date.now(),
        column,
        content: cardContent,
      },
    ];

    setCards(updatedCards);
  }

  function moveLeft(col, cardId) {
    const updatedCards = cards.reduce((acc, curr) => {
      if (curr.id === cardId) {
        curr = { ...curr, column: col - 1 };
      }

      acc.push(curr);
      return acc;
    }, []);

    console.log(updatedCards);
    setCards(updatedCards);
  }

  function moveRight(col, cardId) {
    const updatedCards = cards.reduce((acc, curr) => {
      if (curr.id === cardId) {
        curr = { ...curr, column: col + 1 };
      }

      acc.push(curr);
      return acc;
    }, []);

    console.log(updatedCards);
    setCards(updatedCards);
  }

  return (
    <div className="App">
      {columns.map((column, idx) => (
        <Column
          key={`col-${idx}`}
          idx={idx}
          title={column.title}
          color={column.color}
          addCard={addCard}
          cards={cards}
          moveRight={moveRight}
          moveLeft={moveLeft}
        />
      ))}
    </div>
  );
}

export default App;
