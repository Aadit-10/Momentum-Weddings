const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://aadit:momentum1234567@momentum-weddings.oycqn2a.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.model('Admin', adminSchema);

const adminUsername = 'admin';
const adminPassword = 'Password'; // Replace with the desired password

bcrypt.hash(adminPassword, 10)
  .then((hashedPassword) => {
    const newAdmin = new Admin({
      username: adminUsername,
      password: hashedPassword,
    });

    return newAdmin.save(); // Returns a Promise
  })
  .then(() => {
    console.log('Admin user added to the database.');
  })
  .catch((err) => {
    console.error('Error:', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
