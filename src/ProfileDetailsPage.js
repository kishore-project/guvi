import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfileDetailsPage = () => {
  const location = useLocation();
  const profile = location.state?.profile;

  if (!profile) {
    // Handle the case when the profile data is not available
    // For example, redirect to the profile update page or show an error message
    return <div>No profile data available</div>;
  }

  // Convert the date object to a string
  const formattedDate = profile.dob.toDateString();

  // Inline styles for the component
  const containerStyles = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  };

  const headingStyles = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const detailStyles = {
    marginBottom: '10px',
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Profile Details</h1>
      <p style={detailStyles}>Age: {profile.age}</p>
      <p style={detailStyles}>Gender: {profile.gender}</p>
      <p style={detailStyles}>Date of Birth: {formattedDate}</p>
      <p style={detailStyles}>Mobile: {profile.mobile}</p>
    </div>
  );
}; 

export default ProfileDetailsPage;
