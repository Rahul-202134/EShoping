import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '', // corrected the key here
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter valid Credentials');
    }
    navigate("/Login");
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h2 className='form'>Resister Here</h2>
          <div className="col-lg-5">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder='Name'
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
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
                    placeholder='Password'
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Location*
                  </label>
                  <input
                    type="text"
                    placeholder='Location'
                    name="geolocation"
                    value={credentials.geolocation}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>

                <button type="submit" to="/Login" className="m-3 btn btn-primary">
                  Submit
                </button>
                <Link to="/Login" className="m-3 btn btn-danger">
                  Already have an Account?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
