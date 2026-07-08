const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({// defines the shape of every expense document ..what fields it has, and their types
  title: {
    type: String,
    required: true //won't let you save an expense without a title/amount/category
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,//defaults would current date if not provided one 
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', expenseSchema);//turns the schema into a usable model, and tells MongoDB to create a collection called expenses 