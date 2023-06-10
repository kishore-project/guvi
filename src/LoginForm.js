import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Make API call to authenticate the user
    // Assuming the API call is asynchronous, you can handle the successful login response as follows:
    // Example: Assuming the API response contains a success property
    const isLoginSuccessful = true; // Replace this with the actual response from the API
    if (isLoginSuccessful) {
      // Redirect to the profile page
      history.push('/profile');
    } else {
      setError('Invalid email or password.');
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
      <h2 style={{ textAlign: 'center' }}>LoginForm</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" style={inputStyles} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" style={inputStyles} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" style={buttonStyles}>Login</button>
      <div style={linkStyles}>
        <Link to="/signup">
          <button type="button" style={buttonStyles}>Go to Signup</button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
