import React from 'react';
import { Link } from 'react-router-dom';


export const CardPost= props => {
  return (
    <div className='card bg-light mb-4 border-success shadow-sm mx-auto p-3'>
    <h4>{props.cont.title}</h4>
      <Link to={'/post/' + props.cont.id}>
        <img
          src={require(`../../../pictures/${props.cont.id}.jpg`)}
          alt='Img'
          className='card-img-top'
        />
      </Link>
    </div>
  );
};
