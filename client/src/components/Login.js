import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [credentials, setCredentials] = useState({username: '',  password: ''})


    const handleChange = e => {
         setCredentials({ ...credentials, [e.target.name]: e.target.value});
    }

    const login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/bubblespage');
        })
        .catch(err => console.log(err.message));
    }

    return (
        <div>
          <form onSubmit={login}>
            Username: <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
            Password<input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      );
    }

export default Login;
