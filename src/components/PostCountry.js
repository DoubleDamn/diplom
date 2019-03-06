import React, { Component } from 'react';
import { Comments } from './Comments';

class PostCountry extends Component {
  render() {
    return (
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <h1 class='mt-4'>Post Title</h1>
              <img class='img-fluid rounded' src='' alt='' />
              <hr />
              <p class='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                minus inventore?
              </p>
              <p class='lead'>
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
