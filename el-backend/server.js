const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', require('./routes/courseRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);
});
