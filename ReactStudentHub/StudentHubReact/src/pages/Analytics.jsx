import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useAuth } from '../context/AuthContext'
import { API_URL as BASE_URL } from '../config'

var CAFE_COLORS = ['#7c5a3a', '#d4b896', '#f4d6a0', '#3d2b1f']
var INCOME_COLOR = '#4a7c59'
var EXPENSE_COLOR = '#b85c4a'

function Analytics() {
  var [expenses, setExpenses] = useState([])
  var [tasks, setTasks] = useState([])
  var auth = useAuth()

  useEffect(function () {
    fetch(BASE_URL + '/api/expenses', {
      headers: { 'Authorization': 'Bearer ' + auth.token }
    })
      .then(function (res) { return res.json() })
      .then(function (data) {
        if (Array.isArray(data)) setExpenses(data)
      })
      .catch(function () {})

    var storedTasks = JSON.parse(localStorage.getItem('sh_tasks')) || []
    setTasks(storedTasks)
  }, [])

  // Category breakdown (expenses only)
  var categoryTotals = {}
  expenses.forEach(function (exp) {
    if (exp.type === 'expense') {
      categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount
    }
  })
  var categoryData = Object.keys(categoryTotals).map(function (cat) {
    return { name: cat, value: categoryTotals[cat] }
  })

  // Income vs Expense
  var totalIncome = 0
  var totalExpense = 0
  expenses.forEach(function (exp) {
    if (exp.type === 'income') totalIncome += exp.amount
    else totalExpense += exp.amount
  })
  var incomeExpenseData = [
    { name: 'Income', amount: totalIncome },
    { name: 'Expense', amount: totalExpense }
  ]

  // Task completion
  var completedCount = tasks.filter(function (t) { return t.done }).length
  var pendingCount = tasks.length - completedCount
  var taskData = [
    { name: 'Completed', value: completedCount },
    { name: 'Pending', value: pendingCount }
  ]

  return (
    <div className="page-fade max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-playfair font-bold text-cafe-brown text-center mb-2">Analytics</h1>
      <p className="text-amber-600 text-center font-inter mb-10">A closer look at your habits and spending</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Category Breakdown */}
        <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md">
          <h2 className="text-xl font-playfair font-bold text-cafe-brown mb-4">Spending by Category</h2>
          {categoryData.length === 0 ? (
            <p className="text-cafe-mid text-center py-10">No expense data yet</p>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={function (entry) { return entry.name }}
                >
                  {categoryData.map(function (entry, index) {
                    return <Cell key={index} fill={CAFE_COLORS[index % CAFE_COLORS.length]} />
                  })}
                </Pie>
                <Tooltip formatter={function (value) { return '₹' + value }} />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Income vs Expense */}
        <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md">
          <h2 className="text-xl font-playfair font-bold text-cafe-brown mb-4">Income vs Expense</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={incomeExpenseData}>
              <XAxis dataKey="name" stroke="#7c5a3a" />
              <YAxis stroke="#7c5a3a" />
              <Tooltip formatter={function (value) { return '₹' + value }} />
              <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                <Cell fill={INCOME_COLOR} />
                <Cell fill={EXPENSE_COLOR} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="text-center mt-4">
            <p className="text-sm text-amber-600">Net Balance</p>
            <p className="text-2xl font-bold text-cafe-brown">₹{totalIncome - totalExpense}</p>
          </div>
        </div>

      </div>

      {/* Task Completion */}
      <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-playfair font-bold text-cafe-brown mb-4 text-center">Task Completion</h2>
        {tasks.length === 0 ? (
          <p className="text-cafe-mid text-center py-10">No tasks yet</p>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={taskData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  label={function (entry) { return entry.name + ': ' + entry.value }}
                >
                  <Cell fill="#4a7c59" />
                  <Cell fill="#d4b896" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-cafe-brown font-semibold mt-2">
              {completedCount} / {tasks.length} tasks completed
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Analytics