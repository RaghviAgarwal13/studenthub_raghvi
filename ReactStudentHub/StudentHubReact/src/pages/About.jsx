import React from 'react'

const About = () => {
  return (
    <>
    <div className="page-fade">

  {/* <!-- ABOUT SECTION --> */}
   <section className="aboutclass" id="about">
    <h1 className="font-playfair font-bold text-1xl mb-3">About</h1>
    <p>Hi! I am Raghvi Agarwal, a first year CSE student heading to second year. I am currently exploring the web development domain.StudentHub is a page for all student to keep track of their tasks and ease their already stressed life.</p>
    <p>In Week 1,I have built a landing page using HTML,CSS and JavaScript. It consists of a navigation bar, home page, a dashboard containing a quote generator and a weather widget.It also has a github profile fetcher built by api fetch,async/await concepts</p>
    <p>In Week 2, I added two interactive components-A task manager and a Pomodoro Timer.The task manager allows the user to add,complete and delete tasks while pomodoro help in focused sessions.This is persistent using local storage concept.I also have used tailwind css for dashboard components.</p>
    <p>In Week 3, I migrated StudentHub into a full React app using Vite, splitting everything into reusable components and pages with React Router for navigation. I rebuilt my Task Manager and Pomodoro Timer using useState and useEffect, added a custom useLocalStorage hook, and built a new Announcements page with search option.</p>
    <p>In Week 4, I built the backend for StudentHub using Express and MongoDB. I created REST API routes to add, view, and delete expenses, and connected them to a new Expense Tracker feature on the frontend. Data is now stored in MongoDB database with validation on both the frontend and backend. I also organized the backend in MVC archtecture.</p>
    <p>In Week 5, I implemented full authentication using JWT and bcrypt password hashing, with proper error handling for wrong passwords, duplicate emails, and empty fields. I added role-based access control with an Admin Panel, connected the Expense Tracker to individual user accounts, upgraded it to support both Income and Expense entries with a running balance, and deployed the full-stack app to Vercel.</p>
    <p>In Week 6, I focused on stability and polish: fixing a MongoDB serverless connection issue, configuring CORS for the deployed frontend, adding request logging and rate limiting, and fixing responsiveness issues across several components. I also built an Analytics page using Recharts as my wildcard feature, showing spending breakdowns, income vs expense comparisons, and task completion charts.</p>
   </section>
    </div>
    </>
  )
}

export default About
