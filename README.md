# studenthub_raghvi

StudentHub is a student productivity dashboard designed to help students organize their academic life in one place.

The project follows a week-by-week full-stack development roadmap and currently includes a responsive landing page with interactive JavaScript features.
It has a cozy study cafe themed design 

# WEEK 1
In week 1, I created a landing page with the following features
-navigation bar
-light and dark mode toggle
-hero section with a start exploring button
-A dashboard consisting of a static weather widget and other stats
-a quote generator 
-a github profile fetcher
-an about page and a footer
All this required HTML, CSS and JavaScript.

# WEEK 2
In week 2, StudentHub was expanded from a landing page into an interactive productivity dashboard.
-A task manager that allows users to add, complete and delete tasks.
-A Pomodoro timer with start,pause and reset functions
-Persistent data storage using local storage
-Tailwind CSS for UI consistency
This was built using html,css,javascript,Tailwind CSS localStorage API, AND JSON(JSON.stringify() and JSON.parse())

# WEEK 3
In week 3, StudentHub was converted into a React site.
-Converted the entire project into a React app using Vite
-Split the UI into reusable components (Navbar, Footer, TaskManager, PomodoroTimer, GithubFinder) and pages (Home, Dashboard, About)
-Rebuilt the Task Manager and Pomodoro Timer using useState and useEffect for dynamic state
-Added React Router for client-side navigation between Home, Dashboard and About pages
-Built a custom useLocalStorage hook to handle data persistence across components
-Added an Announcements and Events page
This was built using React, Vite, React Router, React Hooks (useState, useEffect), and custom hooks.

# WEEK 4
In week 4, I built a backend for StudentHub using Express and MongoDB, and connected it to a new Expense Tracker feature.
-Set up an Express server with routes, models, and controllers (MVC structure)
-Connected to MongoDB Atlas using Mongoose, with an Expense schema and validation rules
-Built REST API endpoints (GET, POST, DELETE) for /api/expenses
-Connected the React frontend to the backend using fetch and useEffect, replacing localStorage for this feature
-Added a Category filter and a running Total summary
-Tested all API routes using Postman
This was built using Express.js, Node.js, MongoDB Atlas, Mongoose, REST APIs, CORS middleware, and Postman.