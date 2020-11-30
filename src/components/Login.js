import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();

  const handler = () => {
    history.push('/');
  };
  return (
    <Fragment>
      <h3>Login...</h3>

      <hr />

      <button className='btn btn-primary' onClick={handler}>
        Enter
      </button>
    </Fragment>
  );
};

export default Login;
