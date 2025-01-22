// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [userData, setUserData] = useState(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log("API Response:", json);

    if (!json.success) {
      alert('Enter valid Credentials');
    } else {
      if (!json.user || !json.user.email) {
        console.log("User data is undefined or does not contain email:", json.user);
      } else {
        setUserData(json.user);
        localStorage.setItem("authToken", json.authToken);
        navigate("/", { state: { userData: json.user } });
      }
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container pb-4">
        <div className='row justify-content-center'>
          <div className='col-lg-4'>
          <h2 className='form'>Login Here</h2>
            <div className="box rounded">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address*
                  </label>
                  <input
                    type="email"
                    placeholder='Email'
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password*
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={credentials.password}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="m-3 btn btn-primary">
                  Submit
                </button>
                <Link to="/Signup" className="m-3 btn btn-danger">
                  Signup
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
