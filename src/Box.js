import React, { useState } from 'react';
import { choice } from './utils/choice';
import './Box.css';

const Box = ({ allColors }) => {
  const [color, setColor] = useState(choice(allColors));

  const handleClick = () => {
    setColor(choice(allColors.filter(c => c !== color)));
  };

  return (
    <div
      className='Box'
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
};

export default Box;
