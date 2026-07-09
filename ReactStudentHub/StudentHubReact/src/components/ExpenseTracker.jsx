import { useState, useEffect } from 'react';

function ExpenseTracker() {
  var [expenses, setExpenses] = useState([]);
  var [title, setTitle] = useState('');
  var [amount, setAmount] = useState('');
  var [category, setCategory] = useState('Food');
  var [filterCategory, setFilterCategory] = useState('All');

  var API_URL = 'http://localhost:5000/api/expenses';

  useEffect(function () {
    fetchExpenses();
  }, []);

  function fetchExpenses() {
    fetch(API_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setExpenses(data);
      })
      .catch(function (err) {
        console.log('Error fetching expenses: ' + err);
      });
  }

  function handleAddExpense(e) {
    e.preventDefault();

    if (title.trim() === '' || amount === '') {
      return;
    }

    var newExpense = {
      title: title,
      amount: Number(amount),
      category: category
    };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExpense)
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (savedExpense) {
        setExpenses(expenses.concat(savedExpense));
        setTitle('');
        setAmount('');
        setCategory('Food');
      })
      .catch(function (err) {
        console.log('Error adding expense: ' + err);
      });
  }

  function handleDeleteExpense(id) {
    fetch(API_URL + '/' + id, {
      method: 'DELETE'
    })
      .then(function () {
        var updatedExpenses = expenses.filter(function (exp) {
          return exp._id !== id;
        });
        setExpenses(updatedExpenses);
      })
      .catch(function (err) {
        console.log('Error deleting expense: ' + err);
      });
  }

  function handleInputKeyDown(e) {
    if (e.key === 'Enter') addTaskShortcut(e);
  }

  function addTaskShortcut(e) {
    handleAddExpense(e);
  }

  var filteredExpenses = expenses;
  if (filterCategory !== 'All') {
    filteredExpenses = expenses.filter(function (exp) {
      return exp.category === filterCategory;
    });
  }

  var total = 0;
  for (var i = 0; i < filteredExpenses.length; i++) {
    total = total + filteredExpenses[i].amount;
  }

  return (
    <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md min-h-[518px]" id="expensetracker">
      <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Expense Tracker</h2>

      {/* add expense form */}
      <form onSubmit={handleAddExpense} className="flex flex-col gap-2 mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={function (e) { setTitle(e.target.value); }}
            className="inputrow flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={function (e) { setAmount(e.target.value); }}
            className="inputrow w-28 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={category}
            onChange={function (e) { setCategory(e.target.value); }}
            className="flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Study">Study</option>
          </select>
          <button
            type="submit"
            className="bg-cafe-dark text-cafe-gold px-4 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all"
          >
            Add
          </button>
        </div>
      </form>

      {/* filter row */}
      <div className="flex items-center gap-2 mb-4">
        <label className="text-cafe-brown font-inter text-sm">Filter:</label>
        <select
          value={filterCategory}
          onChange={function (e) { setFilterCategory(e.target.value); }}
          className="px-3 py-1 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Study">Study</option>
        </select>
      </div>

      {/* total */}
      <h3 className="text-xl font-playfair font-bold text-cafe-brown mb-4">
        Total: ₹{total}
      </h3>

      {/* expense list */}
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {filteredExpenses.map(function (exp) {
          return (
            <li
              key={exp._id}
              className="inputrow flex items-center justify-between gap-3 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 group"
            >
              <span className="flex-1 text-cafe-brown font-inter text-sm">
                {exp.title} - ₹{exp.amount} ({exp.category})
              </span>
              <button
                onClick={function () { handleDeleteExpense(exp._id); }}
                className="text-amber-300 hover:text-red-400 transition-all text-lg opacity-0 group-hover:opacity-100"
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>

      {filteredExpenses.length === 0 && (
        <p className="text-cafe-mid font-bold text-2xl text-center mt-4">
          No expenses yet. Add one above!
        </p>
      )}
    </div>
  );
}

export default ExpenseTracker;