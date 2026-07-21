const Expense = require('../models/Expense');

// GET all expenses for the logged-in user
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST a new expense
const createExpense = async (req, res) => {
  const expense = new Expense({
    user: req.user._id,
    title: req.body.title,
    amount: req.body.amount,
    type: req.body.type,
    category: req.body.category
  });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(function (e) {
        return e.message;
      });
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(400).json({ message: err.message });
  }
};

// DELETE an expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    // Make sure the expense belongs to the logged-in user
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to delete this expense' });
    }
    await expense.deleteOne();
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense
};