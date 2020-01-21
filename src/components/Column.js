import React from 'react';

const Column = ({
  idx,
  title,
  color,
  cards = [],
  addCard,
  moveRight,
  moveLeft,
}) => {
  console.log(cards);
  return (
    <div className="column">
      <div className="title" style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className="cards">
        {cards
          .filter(card => card.column === idx)
          .map((card, ind) => (
            <div className="card" key={`card-${ind}`}>
              <span onClick={() => moveLeft(idx, card.id)}>
                {idx > 0 && '<'}
              </span>
              {card.content}
              <span
                onClick={() => {
                  moveRight(idx, card.id);
                }}
              >
                {idx < 3 && '>'}
              </span>
            </div>
          ))}
      </div>
      <button onClick={() => addCard(idx)}>+ Add a card</button>
    </div>
  );
};

export default Column;
