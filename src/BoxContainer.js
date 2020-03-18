import React from 'react';
import Box from './Box';
import './BoxContainer.css';

const BoxContainer = () => {
  const NUM_BOXES = 21;

  const ALL_COLORS = [
    'purple',
    'magenta',
    'blue',
    'pink',
    'orange',
    'green',
    'teal',
    'orangered',
    'white',
    'black'
  ];

  return (
    <div className='BoxContainer'>
      {Array.from({ length: NUM_BOXES }).map(() => (
        <Box allColors={ALL_COLORS} />
      ))}
    </div>
  );
};

export default BoxContainer;
