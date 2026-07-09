import React from 'react'
import Widgetsquote from '../components/Widgetsquote'
import TaskManager from '../components/TaskManager'
import PomodoroTimer from '../components/PomodoroTimer'
import GitHubFinder from '../components/GitHubFinder'
import ExpenseTracker from '../components/ExpenseTracker'

const Dashboard = () => {
  return (
    <div className="page-fade">
        <section className="dashboard-section" id="dashboard">
            <Widgetsquote/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <TaskManager/>
                <PomodoroTimer/>
            </div>
            <div className="flex justify-center px-6 pb-6">
                <div className="w-full md:w-2/3">
                    <ExpenseTracker/>
                </div>
            </div>
            <GitHubFinder/>
        </section>
    </div>
  )
}

export default Dashboard