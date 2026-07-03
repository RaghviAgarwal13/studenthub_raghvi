import React from 'react'
import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('sh_tasks', [])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  function addTask(){
    const text=inputValue.trim()
    if(!text) return
    const newTask={
      id: Date.now(),
      text:text,
      done:false
    }
    setTasks([...tasks, newTask])
    setInputValue('')
  }
  function toggleTask(id){
    setTasks(
      tasks.map(task =>
        task.id=== id ? {...task, done: !task.done} : task
      )
    )
  }
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }
  function startEditing(task) {
    setEditingId(task.id)
    setEditValue(task.text)
  }
  function saveEdit(id) {
    const text = editValue.trim()
    if (!text) return

    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: text } : task
      )
    )
    setEditingId(null)
    setEditValue('')
  }
  function cancelEdit() {
    setEditingId(null)
    setEditValue('')
  }
  function handleInputKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }
  function handleEditKeyDown(e, id) {
    if (e.key === 'Enter') saveEdit(id)
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <>
    <div>
        <div className=" newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md min-h-[518px]" id="taskmanager">
    <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Task Manager</h2>

    <div className=" flex gap-2 mb-4">
      <input
        type="text"
        id="taskInput"
        placeholder="Add a new task..."
        className="inputrow flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
      <button
        id="addTaskBtn"
        onClick={addTask}
        className="bg-cafe-dark text-cafe-gold px-4 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all"
      >
        Add
      </button>
    </div>

    <ul  className="space-y-2 max-h-64 overflow-y-auto">
        {tasks.map(task => (
          <li
            key={task.id}
            className="inputrow flex items-center gap-3 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 group"
          >
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => handleEditKeyDown(e, task.id)}
                  autoFocus
                  className="flex-1 px-2 py-1 rounded-lg border border-amber-300 bg-white text-cafe-brown text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  onClick={() => saveEdit(task.id)}
                  className="text-green-600 hover:text-green-800 text-sm font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="text-amber-400 hover:text-red-400 text-sm font-semibold"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4 accent-amber-700 cursor-pointer"
                />
                <span
                  id="tasklist"
                  className={`flex-1 text-cafe-brown font-inter text-sm ${task.done ? 'line-through opacity-50' : ''}`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => startEditing(task)}
                  className="text-amber-400 hover:text-amber-700 transition-all text-sm opacity-0 group-hover:opacity-100"
                >
                 <span className="material-symbols-outlined">edit</span>
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-amber-300 hover:text-red-400 transition-all text-lg opacity-0 group-hover:opacity-100"
                >
                  ✕
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="text-cafe-mid font-bold text-2xl text-center mt-4">
          No tasks yet. Add one above!
        </p>
      )}
     </div>
    </div>
    </>
  )
}

export default TaskManager