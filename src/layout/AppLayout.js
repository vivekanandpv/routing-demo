import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../components/About';
import CustomerDetails from '../components/CustomerDetails';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Contact from '../components/Contact';
import Special from '../components/Special';
import SpNavbar from '../components/SpNavbar';

const AppLayout = (props) => {
  return (
    <Fragment>
      {props.navbar ? <Navbar /> : null}
      {props.special ? <SpNavbar /> : null}
      <div className='container' style={{ height: '40vh' }}>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/special' component={Special} />
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      {props.footer ? <Footer /> : null}
    </Fragment>
  );
};

export default AppLayout;
