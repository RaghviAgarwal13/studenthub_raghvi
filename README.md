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

# WEEK 5
In week 5, I added authentication to StudentHub using JWT.
- Created a User model with bcrypt password hashing
- Built signup and login routes with proper error messages (wrong password, duplicate email, empty fields, etc.)
- Added middleware to protect routes so only logged in users can access them
- Added role based access with an Admin Panel for admin users
- Connected the Expense Tracker to individual user accounts and added Income/Expense types with a balance card
- Added a Profile page and a welcome message on the dashboard
- Deployed the frontend and backend separately on Vercel
This was built using JWT, bcryptjs, Express middleware, MongoDB, and React Context API.

# WEEK 6
In week 6, I focused on fixing bugs and polishing the app for final submission.
- Fixed a MongoDB connection bug that only showed up after deploying to Vercel
- Set up CORS properly so only my frontend can talk to my backend
- Added logging and rate limiting for basic security
- Fixed responsiveness issues on mobile for a few components
- Built an Analytics page with charts (my wildcard feature) using Recharts
- Updated the README and tested everything on the live site
This was built using Morgan, express-rate-limit, and Recharts.

# Live Links
- Frontend: https://studenthub-raghvi.vercel.app/
- Backend: https://studenthub-raghvi-backend.vercel.app/

# Tech Stack
- Frontend: React, Vite, React Router, Tailwind CSS, Recharts
- Backend: Node.js, Express.js, MongoDB Atlas, Mongoose
- Auth: JWT (jsonwebtoken), bcryptjs
- Other: Axios/Fetch, CORS, Morgan, express-rate-limit
- Deployment: Vercel (frontend and backend, separately)

# Running Locally

## Backend
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the backend folder with:
    -MONGO_URI=your_mongodb_atlas_connection_string
    -JWT_SECRET=any_long_random_string
    -PORT=5000
4. Start the server: `node server.js`
5. Backend runs on `http://localhost:5000`

## Frontend
1. Navigate to the frontend folder (project root of the React app)
2. Install dependencies: `npm install`
3. Create a `.env` file in the frontend root with:  VITE_API_URL=http://localhost:5000
4. Start the dev server: `npm run dev`
5. Frontend runs on `http://localhost:5173`

# Environment Variables
- MONGO_URI - MongoDB Atlas connection string (backend)
- JWT_SECRET - secret key used to sign JWT tokens (backend)
- PORT - port the backend runs on locally (backend)
- VITE_API_URL - base URL the frontend uses to reach the backend (frontend)