import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend
    })
    .catch((error) => {
      // Handle any errors
    });
    // Perform client-side validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Make API call to register the user
    // Assuming the API call is asynchronous, you can handle the successful signup response as follows:
    // Example: Assuming the API response contains a success property
    const isSignupSuccessful = true; // Replace this with the actual response from the API
    if (isSignupSuccessful) {
      // Redirect to the login page
      history.push('/');
    } else {
      setError('Signup failed. Please try again.');
    }
  };

  // Inline styles for the form
  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  };

  const inputStyles = {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const linkStyles = {
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" style={inputStyles} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" style={inputStyles} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" style={inputStyles} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="password" style={inputStyles} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      <button type="submit" style={buttonStyles}>Signup</button>
      <div style={linkStyles}>
        <Link to="/">
          <button type="button" style={buttonStyles}>Go to Login</button>
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
