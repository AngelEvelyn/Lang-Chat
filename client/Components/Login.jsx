import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Context } from '../Context.jsx';


function Login({ setAuthModal, setWillSignUp }) {
  const { dispatchCurrUser } = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);

    axios.post('/api/auth/signin', {
      username,
      password,
    })
      .then((data) => {
        console.log('login data', data);
        const payload = {
          username: data.data.result.username,
          userId: data.data.result.id,
        };

        console.log('login payload:', payload);

        dispatchCurrUser({
          type: 'SET_CURR_USER',
          payload,
        });
      })
      .catch(err => console.log('login error:', err));

    setAuthModal(false);
  }
  return (
    <>
      <h1>Log In!</h1>

      <form name="form" onSubmit={handleSubmit}>
        <div className='userNameDiv'>
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <div className='passwordDiv'>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="loginButton">
          <button className="btn btn-primary">Login</button>

          {false
            && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
        </div>

        <button onClick={() => setWillSignUp(true)}>Sign Up</button>
      </form>
    </>
  );
}

export default Login;
