import React from 'react';
import { Link } from 'react-router-dom';

const CustomersList = (props) => {
  return (
    <>
      {props.customers.map((c) => (
        <p key={c.id}>
          <Link to={{ pathname: `/customers/${c.id}`, state: { customer: c } }}>
            {`Customer ID: ${c.id}`}
          </Link>
        </p>
      ))}
    </>
  );
};

export default CustomersList;
