import React, { Component } from 'react';
import { Comments } from './Comments';

class PostCountry extends Component {
  componentDidMount() {
    this.props.getCountry(this.props.match.params.post_id);
    this.props.getUsers()
  }
 
  onFav = e => {
    e.preventDefault();
    e.target.classList.toggle('addFav') ?  e.target.textContent = 'Добавлено' 
    : e.target.textContent = 'Добавить в закладки'
    this.props.user.fav.includes(this.props.country.title) ? // this.props.user.fav.(this.props.country.title)
     this.props.user.fav.splice(this.props.user.fav.indexOf(this.props.country.title), 1)
    : this.props.user.fav.push(this.props.country.title)
  }
  render() {

    return (
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 m-auto'>
              <h1 className='mt-4'>{this.props.country.title}</h1>
              <button className= 'btn btn-outline-danger mb-3 mx-1 mt-1 fav' onClick={this.onFav}> Добавить в закладки </button>
              <h6 className='mt-4 visa'>Тип визы : {this.props.country.visaType}</h6>
              <img
                src={require(`../../pictures/${this.props.country.id || 2}.jpg`)}
                alt='Img'
                className='card-img-top mr-3'
              />
              <hr />
              <p className='lead'>
                {this.props.country.description}
              </p>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                minus inventore?
              </p>
              <hr />
              <Comments  com = {this.props.country.comments}/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default PostCountry;
