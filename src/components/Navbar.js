import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <Fragment>
      <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
        <h5 className='my-0 mr-md-auto font-weight-normal'>Company name</h5>
        <nav className='my-2 my-md-0 mr-md-3'>
          <Link to='/' className='p-2 text-dark'>
            Home
          </Link>

          <Link to='/about' className='p-2 text-dark'>
            About
          </Link>

          <Link to='/contact' className='p-2 text-dark'>
            Contact Us
          </Link>
          <Link to='/special' className='p-2 text-dark'>
            Special
          </Link>

          <Link to='/login' className='p-2 text-dark'>
            Login
          </Link>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
