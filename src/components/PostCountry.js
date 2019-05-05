import React, { Component } from 'react';
import { Comments } from './Comments';

class PostCountry extends Component {
  render() {
    return (
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <h1 className='mt-4'>Post Title</h1>
              <img className='img-fluid rounded' src='' alt='' />
              <hr />
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                minus inventore?
              </p>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                minus inventore?
              </p>
              <hr />
              <Comments />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default PostCountry;
