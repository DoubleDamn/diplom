import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <p className='navbar-brand'>Travel time</p>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarColor01'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-link' activeClassName='nav-item active nav-link'>
              Страны
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Personal' className='nav-link' activeClassName='nav-item active nav-link'>
              Личный кабинет
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/news' className='nav-link' activeClassName='nav-item active nav-link'>
              Новости
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/post/post_id' className='nav-link' activeClassName='nav-item active nav-link'>
              Вопрос-ответ
            </NavLink>
          </li>
        </ul>
        <div className='enter'>
          <button className='btn enter' type='submit'>
            Войти
          </button>
          <br/>
          <button className='btn enter' type='submit'>
            Регистрация
          </button>
        </div>
        <form className='form-inline my-2 my-lg-0'>
        
          <input className='form-control' type='text' placeholder='Поиск' />
          <button className='btn btn-secondary search' type='submit'>
            <i className='fas fa-search' />
          </button>
        </form>
      </div>
    </nav>
  );
};
