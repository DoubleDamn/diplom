import React from 'react';
import { Link } from 'react-router-dom';


export const CardPost= props => {
  return (
    <div className='card bg-light m-4 border-secondary shadow-sm mx-auto pb-3'>
    <h3 className="card-header">{props.cont.title}</h3>
    <div className="card-body">
      <Link to={'/post/' + props.cont.id}>
        <img
          src={require(`../../../pictures/1.jpg`)}
          alt='Img'
          className='card-img-top-main mr-3'
        />
      </Link>
      <p className="card-text"> {props.cont.description}</p>
      <Link to={'/post/' + props.cont.id}className="card-link"> Читать далее</Link>
      </div>
    </div>
  );
};
