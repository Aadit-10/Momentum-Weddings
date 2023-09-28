const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schema');
const bcrypt = require('bcrypt'); 

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use(cors());

const dbUrl = 'mongodb+srv://aadit:momentum1234567@cluster0.eiqhvnc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  try {
    const check = await User.findOne({ username: username }); // Filter by username
    console.log(check.password);
    if (check) {
      if (check.password === password) {
        res.json('success-user');
      } else {
        res.json('wrongpass');
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexists");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
