import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SpNavbar = (props) => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg  navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/'>
          <img src='logo.svg' width='30' height='30' alt='' loading='lazy' />
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/special'>
                Special
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default SpNavbar;
