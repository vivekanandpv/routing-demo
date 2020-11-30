import React from 'react';
import { Redirect } from 'react-router-dom';

const CustomerDetails = (props) => {
  const onlyNumbers = /^[0-9]{1,3}$/;
  const customer = props.location.state ? props.location.state.customer : null;

  return props.match.params.id.match(onlyNumbers) ? (
    <>
      {customer ? (
        <div className='card'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Customer ID: {customer.id}</li>
            <li className='list-group-item'>
              First Name: {customer.first_name}
            </li>
            <li className='list-group-item'>Last Name: {customer.last_name}</li>
            <li className='list-group-item'>Email: {customer.email}</li>
          </ul>
        </div>
      ) : (
        <Redirect to='/home' />
      )}
    </>
  ) : (
    <h3>Oops! Numbers Only!</h3>
  );
};

export default CustomerDetails;
