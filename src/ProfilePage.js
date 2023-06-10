import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ProfilePage = () => {
  const history = useHistory();

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(null);
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (!age || !gender || !dob || !mobile) {
      setError('Please fill in all fields.');
      return;
    }

    // Make API call to update user details
    // Assuming the API call is asynchronous, you can handle the successful update response as follows:
    // Example: Assuming the API response contains the updated profile data
    const updatedProfile = {
      age,
      gender,
      dob,
      mobile,
    };

    // Redirect to the profile details page and pass the updated profile data as state
    history.push('/profile-details', { profile: updatedProfile });
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
      <h2 style={{ textAlign: 'center' }}>Enter Details</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" style={inputStyles} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <select
        style={inputStyles}
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <DatePicker
        selected={dob}
        onChange={(date) => setDob(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Date of Birth"
        style={inputStyles}
      />
      <input type="text" style={inputStyles} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
      <button type="submit" style={buttonStyles}>Update Profile</button>
      <div style={linkStyles}>
        <Link to="/">
          <button type="button" style={buttonStyles}>Sign Out</button>
        </Link>
      </div>
    </form>
  );
};

export default ProfilePage;
