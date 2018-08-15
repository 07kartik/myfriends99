import React from 'react';

const Card = ({ id, name, dob }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${dob}?size=300x300`} />
      <div>
        <h2 className='test'>{name}</h2>
        <p><b>{dob}</b></p>
      </div>
    </div>
  );
}

export default Card;
