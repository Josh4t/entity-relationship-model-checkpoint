require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const gymRoutes = require('./routes/gymRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Database connection error:', err);
});

// Use the gym routes
app.use('/api/gyms', gymRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
