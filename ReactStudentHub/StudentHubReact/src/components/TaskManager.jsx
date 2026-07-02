import React from 'react'

const TaskManager = () => {
  return (
    <>
    <div>
        <div className=" newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md min-h-[500px]" id="taskmanager">
    <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Task Manager</h2>

    {/* <!-- Input Row --> */}
    <div className=" flex gap-2 mb-4">
      <input
        type="text"
        id="taskInput"
        placeholder="Add a new task..."
        className="inputrow flex-1 px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        id="addTaskBtn"
        className="bg-cafe-dark text-cafe-gold px-4 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all"
      >
        Add
      </button>
    </div>

    {/* <!-- Task List --> */}
    <ul id="taskList" className="space-y-2 max-h-64 overflow-y-auto"></ul>

    {/* <!-- Empty state --> */}
    <p id="noTasks" className="text-cafe-mid font-bold text-2xl text-center mt-4">No tasks yet. Add one above! </p>
     </div>
    </div>
    </>
  )
}

export default TaskManager
