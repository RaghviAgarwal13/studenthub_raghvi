import React from 'react'
import Widgetsquote from '../components/Widgetsquote'
import TaskManager from '../components/TaskManager'
import PomodoroTimer from '../components/PomodoroTimer'
import GitHubFinder from '../components/GitHubFinder'

const Dashboard = () => {
  return (
    <div>
        <section className="dashboard-section" id="dashboard">
            <Widgetsquote/>
            <div className="components-grid p-6  ">
                <TaskManager/>
                <PomodoroTimer/>
            </div>
            <GitHubFinder/>
        </section>
    </div>
  )
}

export default Dashboard
