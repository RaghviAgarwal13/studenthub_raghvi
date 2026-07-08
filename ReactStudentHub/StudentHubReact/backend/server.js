const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenses');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRoutes);

app.get('/', (req, res) => {
  res.send('StudentHub backend is running');
});
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ' + err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});