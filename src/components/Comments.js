import React from 'react';

export const Comments = props => {
  return (
    <React.Fragment>
        {/* Comments form */}
      <div class='card my-4'>
        <h5 class='card-header'>Ваш комментарий:</h5>
        <div class='card-body'>
          <form>
            <div class='form-group'>
              <textarea class='form-control' rows='3' />
            </div>
            <button type='submit' class='btn btn-primary'>
              Отправить
            </button>
          </form>
        </div>
      </div>
      {/* Comment by user */}
      <div className='media mb-4'>
        <img class='d-flex mr-3 rounded-circle' src='http://placehold.it/50x50' alt='' />
        <div className='media-body'>
          <h5 className='mt-0'>Ann</h5>
          Some comments
        </div>
      </div>
    </React.Fragment>
  );
};
