import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((id, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              dob={robots[i].dob}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;