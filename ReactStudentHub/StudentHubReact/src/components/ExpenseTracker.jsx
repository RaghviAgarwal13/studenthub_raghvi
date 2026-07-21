import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function ExpenseTracker() {
  var [expenses, setExpenses] = useState([]);
  var [title, setTitle] = useState('');
  var [amount, setAmount] = useState('');
  var [type, setType] = useState('expense');
  var [category, setCategory] = useState('Food');
  var [errorMsg, setErrorMsg] = useState('');
  var [filterCategory, setFilterCategory] = useState('All');
  var [filterType, setFilterType] = useState('All');

  var auth = useAuth();
  var API_URL = 'http://localhost:5000/api/expenses';

  useEffect(function () {
    fetchExpenses();
  }, []);

  function fetchExpenses() {
    fetch(API_URL, {
      headers: { 'Authorization': 'Bearer ' + auth.token }
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (Array.isArray(data)) {
          setExpenses(data);
        } else {
          setExpenses([]);
        }
      })
      .catch(function (err) {
        console.log('Error fetching expenses: ' + err);
        setExpenses([]);
      });
  }

  function handleAddExpense(e) {
    e.preventDefault();
    setErrorMsg('');

    if (title.trim() === '' || amount === '' || Number(amount) <= 0) {
      setErrorMsg('Please enter a title and an amount greater than 0');
      return;
    }

    var newExpense = {
      title: title,
      amount: Number(amount),
      type: type,
      category: category
    };

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth.token
      },
      body: JSON.stringify(newExpense)
    })
      .then(function (res) {
        if (!res.ok) {
          return res.json().then(function (errData) {
            throw new Error(errData.message);
          });
        }
        return res.json();
      })
      .then(function (savedExpense) {
        setExpenses(expenses.concat(savedExpense));
        setTitle('');
        setAmount('');
        setType('expense');
        setCategory('Food');
      })
      .catch(function (err) {
        setErrorMsg(err.message);
      });
  }

  function handleDeleteExpense(id) {
    fetch(API_URL + '/' + id, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + auth.token }
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
    filteredExpenses = filteredExpenses.filter(function (exp) {
      return exp.category === filterCategory;
    });
  }
  if (filterType !== 'All') {
    filteredExpenses = filteredExpenses.filter(function (exp) {
      return exp.type === filterType;
    });
  }

  var totalIncome = 0;
  var totalExpense = 0;
  for (var i = 0; i < expenses.length; i++) {
    if (expenses[i].type === 'income') {
      totalIncome = totalIncome + expenses[i].amount;
    } else {
      totalExpense = totalExpense + expenses[i].amount;
    }
  }
  var netBalance = totalIncome - totalExpense;

  return (
    <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md min-h-[518px]" id="expensetracker">
      <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Expense Tracker</h2>

      {/* balance card */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-2">
          <p className="text-xs text-green-700">Income</p>
          <p className="text-lg font-bold text-green-700">₹{totalIncome}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-2">
          <p className="text-xs text-red-700">Expense</p>
          <p className="text-lg font-bold text-red-700">₹{totalExpense}</p>
        </div>
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-2">
          <p className="text-xs text-cafe-brown">Balance</p>
          <p className="text-lg font-bold text-cafe-brown">₹{netBalance}</p>
        </div>
      </div>

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
            value={type}
            onChange={function (e) { setType(e.target.value); }}
            className="flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <select
            value={category}
            onChange={function (e) { setCategory(e.target.value); }}
            className="flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Study">Study</option>
            <option value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="bg-cafe-dark text-cafe-gold px-4 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all"
          >
            Add
          </button>
        </div>
        {errorMsg !== '' && (
          <p className="text-red-500 text-sm mb-4">{errorMsg}</p>
        )}
      </form>

      {/* filter row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <label className="text-cafe-brown font-inter text-sm">Filter:</label>
        <select
          value={filterType}
          onChange={function (e) { setFilterType(e.target.value); }}
          className="px-3 py-1 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="All">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select
          value={filterCategory}
          onChange={function (e) { setFilterCategory(e.target.value); }}
          className="px-3 py-1 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Study">Study</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* expense list */}
      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {filteredExpenses.map(function (exp) {
          var amountColor = exp.type === 'income' ? 'text-green-600' : 'text-red-500';
          var sign = exp.type === 'income' ? '+' : '-';
          return (
            <li
              key={exp._id}
              className="inputrow flex items-center justify-between gap-3 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 group"
            >
              <span className="flex-1 text-cafe-brown font-inter text-sm">
                {exp.title} ({exp.category}) <span className={amountColor + ' font-semibold'}>{sign}₹{exp.amount}</span>
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