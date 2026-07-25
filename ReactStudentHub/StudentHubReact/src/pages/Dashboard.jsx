import React from 'react'
import Widgetsquote from '../components/Widgetsquote'
import TaskManager from '../components/TaskManager'
import PomodoroTimer from '../components/PomodoroTimer'
import GitHubFinder from '../components/GitHubFinder'
import ExpenseTracker from '../components/ExpenseTracker'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  var auth = useAuth()

  return (
    <div className="page-fade">
        <section className="dashboard-section" id="dashboard">
            <div className="text-center pt-10 pb-4 px-6">
              <h1 className="text-4xl font-playfair font-bold text-cafe-mid">
                Welcome back, {auth.user ? auth.user.name : 'Student'} !
              </h1>
            </div>
            <div className="text-center mb-6">
               <Link
                 to="/analytics"
                 className="inline-block bg-cafe-dark text-cafe-gold px-6 py-3 rounded-xl font-semibold hover:bg-cafe-brown transition-all"
                >
              <i className="fa-solid fa-chart-simple mr-2"></i>
             View Analytics
             </Link>
            </div>
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