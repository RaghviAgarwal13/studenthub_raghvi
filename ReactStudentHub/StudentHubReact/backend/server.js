const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenses');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const app = express();
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: { message: 'Too many requests. Please try again later.' }
});
app.use(limiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // stricter limit for login/signup to prevent brute-force
  message: { message: 'Too many login attempts. Please try again later.' }
});

const corsOptions = {
  origin: [
    'https://studenthub-raghvi.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Serverless-safe MongoDB connection
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log('MongoDB connected');
}

// Make sure DB is connected before handling any request
app.use(async function (req, res, next) {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.log('MongoDB connection error: ' + err);
    res.status(500).json({ message: 'Database connection failed' });
  }
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('StudentHub backend is running');
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  connectDB().then(function () {
    app.listen(PORT, () => {
      console.log('Server running on port ' + PORT);
    });
  });
}

module.exports = app;