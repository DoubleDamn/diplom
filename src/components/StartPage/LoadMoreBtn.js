import React from 'react';

export const LoadMoreBtn = props => {
  if (props.isLoading) {
    return <p className='lead'>Загрузка...</p>;
  }
  return (
    <button onClick={props.onClick} className='btn btn-outline-danger mb-3 mx-1'>
      Далее
    </button>
  );
};
