import React, { Component } from 'react';
import Slider from './Carousel';
import { CardPost } from './CardPost';

class StartPage extends Component {
  componentDidMount() {
    // if (this.props.page === 1) {
    // this.props.getLength();
    this.getAll();
  }
  //}
  getAll() {
    // if (this.props.loadNoMore) return;
    this.props.getAll();
  }

  render() {
    console.log(this.state);
    const cont = this.props.countries.map(cont => <CardPost key={cont.id} cont={cont} />);

    return (
      <div className='col-md-12 text-center'>
        <Slider />
        <div className=' d-flex justify-content-around align-items-center flex-wrap ' />
        {cont}
        {/* 
    {this.props.loadNoMore ? (
      <p> That's all!</p>
    ) : (
      <LoadMoreBtn onClick={this.getAll.bind(this)} isLoading={this.props.isLoading} />
    )} */}
      </div>
    );
  }
}

export default StartPage;
