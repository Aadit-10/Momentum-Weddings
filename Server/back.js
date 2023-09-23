const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const User = require('./schema');
const bcrypt = require('bcrypt');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define your API routes

const dbUrl = 'mongodb+srv://aadit:momentum1234567@cluster0.eiqhvnc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout in milliseconds
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Example route to create a new user
// app.post('/users', async (req, res) => {
//   try {
//     // Create a new user using the Mongoose model
//     // Replace this with your actual schema and logic
//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log('Received login request for username:', username);

    // Find the user in the database by username
    const user = await User.findOne({ username });

    if (!user) {
      // If the user doesn't exist, return an error
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // If the passwords don't match, return an error
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If the username and password are correct, you can consider the user logged in
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
