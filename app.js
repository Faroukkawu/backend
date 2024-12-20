// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/db'); // Assuming you have a separate config/db.js file for MongoDB connection
const lessonRoutes = require('./routes/lessons'); // Import the lesson routes
// Load environment variables from .env file

const app = express();
const cors = require('cors');
app.use(cors()); // Allows all origins
// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the lesson routes
app.use('/api', lessonRoutes);

// Set the server to listen on port 5001 (or any port you'd like)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
