import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function SignUp({ setAuthModal }) {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [pictureUrl, setPicUrl] = useState('')
  const [aboutMe, setAboutMe] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username);
    console.log(email);
    console.log(password1);
    console.log(password2);
    console.log(pictureUrl);
    console.log(aboutMe);

    axios.post('/api/auth/signup', {
      username,
      email,
      pictureUrl,
      aboutMe,
      password: password1
    })
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))

    setAuthModal(false)
  }
  return (
    <>
      <h1>SIGN UP!</h1>

      <form name="form" onSubmit={handleSubmit}>
        <div className='userNameDiv'>
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div className='emailDiv'>
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='password1Div'>
          <label htmlFor="password1">Password1</label>
          <input type="password" className="form-control" name="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} />
        </div>

        <div className='password2Div'>
          <label htmlFor="password2">Password2</label>
          <input type="password" className="form-control" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
        </div>

        <div className='picUrlDiv'>
          <label htmlFor="picUrl">Pic Url</label>
          <input type="text" className="form-control" name="picUrl" value={pictureUrl} onChange={(e) => setPicUrl(e.target.value)} />
        </div>

        <div className='aboutMeDiv'>
          <label htmlFor="aboutMe">About Me</label>
          <textarea name="aboutMe" cols="30" rows="5" value={aboutMe} onChange={e => setAboutMe(e.target.value)}></textarea>
        </div>

        <div className="loginButton">
          <button className="btn btn-primary">SignUp</button>
        </div>

      </form>
    </>
  )
}

export default SignUp;