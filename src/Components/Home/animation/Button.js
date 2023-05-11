import React from 'react';

const Button = props => {
  return (
    <a href={props.link} className={`button-folio m-2 relative button-${props.color}`}>
      <span className="pulse"></span>
      <span className='flex'>{props.children}&nbsp;{props.text}</span>
    </a>
  );
};

export default Button;
