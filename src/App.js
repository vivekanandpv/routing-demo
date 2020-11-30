import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import CustomersList from './components/CustomersList';
import CustomerForm from './components/CustomerForm';
import CustomerDetails from './components/CustomerDetails';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import customers from './data/customers.json';
import AppLayout from './layout/AppLayout';
import PrimaryRoutes from './routes/PrimaryRoutes';

const App = () => {
  return (
    <Fragment>
      <PrimaryRoutes />
    </Fragment>
  );
};

export default App;
