import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { uploadFile } from 'react-s3';


//material ui dependencies
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const config = {
  bucketName: 'lang-chat',
  region: 'us-west-1',
  accessKeyId: 'AKIAVUJIGLSF6QVOCVGD',
  secretAccessKey: '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',
}

function SignUp({ setAuthModal }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    aboutMe: '',
  })
  const file = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    let newFile = file.current.files[0]
    console.log(file)

    // let formData = new FormData();
    // formData.append('file', file.current.files[0]);

    uploadFile(newFile, config)
      .then(data => console.log(data))
      .catch(err => console.error(err))

    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(imgURL => {
    //     let data = {
    //       user_id: this.props.userInfo.user_id,
    //       item_name: this.props.formControls.itemName,
    //       description: this.props.formControls.description,
    //       pic_url: imgURL
    //     };
    //     console.log('about to emit message');
    //     fetch('/api/items', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //       .then(res => res.json())
    //       .then(parsedData => {
    //         socket.emit('addedItemFromClient', 'someone added an item! ');
    //         this.props.exitSell();
    //       }); //exits sell modal
    //   })
    //   .catch(err => console.log(err));
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleChange('username')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                type="password"
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="aboutme"
                label="About Me"
                id="aboutMe"
                type="textArea"
                autoComplete="aboutMe"
                onChange={handleChange('aboutMe')}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                className={classes.input}
                // style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                ref={file}
              />
              <label id='uploadphotolabel' htmlFor="raised-button-file">
                {/* <Button variant="raised" component="span" className={classes.button}>
                  Upload
                 </Button> */}
                Upload Profile Photo
              </label>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  uploadphotolabel: {
    color: 'grey',
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




// const [username, setUserName] = useState('')
// const [email, setEmail] = useState('')
// const [password1, setPassword1] = useState('')
// const [password2, setPassword2] = useState('')
// const [pictureUrl, setPicUrl] = useState('')
// const [aboutMe, setAboutMe] = useState('')

// const handleSubmit = (e) => {
//   e.preventDefault()

//   console.log(username);
//   console.log(email);
//   console.log(password1);
//   console.log(password2);
//   console.log(pictureUrl);
//   console.log(aboutMe);

//   axios.post('/api/auth/signup', {
//     username,
//     email,
//     pictureUrl,
//     aboutMe,
//     password: password1
//   })
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => console.log(err))

//   setAuthModal(false)
// }
// return (
//   <>
//     <h1>SIGN UP!</h1>

//     <form name="form" onSubmit={handleSubmit}>
//       <div className='userNameDiv'>
//         <label htmlFor="username">Username</label>
//         <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
//       </div>

//       <div className='emailDiv'>
//         <label htmlFor="email">Email</label>
//         <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>

//       <div className='password1Div'>
//         <label htmlFor="password1">Password1</label>
//         <input type="password" className="form-control" name="password1" value={password1} onChange={(e) => setPassword1(e.target.value)} />
//       </div>

//       <div className='password2Div'>
//         <label htmlFor="password2">Password2</label>
//         <input type="password" className="form-control" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} />
//       </div>

//       <div className='picUrlDiv'>
//         <label htmlFor="picUrl">Pic Url</label>
//         <input type="text" className="form-control" name="picUrl" value={pictureUrl} onChange={(e) => setPicUrl(e.target.value)} />
//       </div>

//       <div className='aboutMeDiv'>
//         <label htmlFor="aboutMe">About Me</label>
//         <textarea name="aboutMe" cols="30" rows="5" value={aboutMe} onChange={e => setAboutMe(e.target.value)}></textarea>
//       </div>

//       <div className="loginButton">
//         <button className="btn btn-primary">SignUp</button>
//       </div>

//     </form>
//   </>
// )
// }

export default SignUp;