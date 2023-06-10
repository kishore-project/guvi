const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongodb = require('mongodb');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Connect to MongoDB
const mongoClient = mongodb.MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'signup-login-db';

mongoClient.connect(mongoURL, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // API endpoints
    // Implement your registration, login, and profile update endpoints here
// User registration endpoint
app.post('/api/register', (req, res) => {
    // Implement user registration logic
  });
  
  // User login endpoint
  app.post('/api/login', (req, res) => {
    // Implement user login logic
  });
  
  // Profile update endpoint
  app.put('/api/profile', (req, res) => {
    // Implement profile update logic
  });
  
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
// User registration endpoint
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
  
    // Hash the password using bcrypt.js
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      // Store the user data in the MongoDB collection
      const collection = db.collection('users');
      collection.insertOne({ name, email, password: hashedPassword }, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        res.status(200).json({ message: 'User registered successfully' });
      });
    });
  });
  
  // User login endpoint
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    // Find the user by email
    const collection = db.collection('users');
    collection.findOne({ email }, (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      // Check if user exists and compare passwords
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Generate a JWT token for authentication
      const token = jwt.sign({ userId: user._id }, 'secret-key');
      res.status(200).json({ token });
    });
  });
  
  // Profile update endpoint
  app.put('/api/profile', (req, res) => {
    const { userId, age, gender, dob, mobile } = req.body;
  
    // Update the user's details in the MongoDB collection
    const collection = db.collection('users');
    collection.updateOne(
      { _id: mongodb.ObjectID(userId) },
      { $set: { age, gender, dob, mobile } },
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        res.status(200).json({ message: 'Profile updated successfully' });
      }
    );
  });
  
