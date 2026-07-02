function App() {
  return (
    <>
      <header>
        <nav className="navbar" id="home">
          <div className="logo"><i className="fa-solid fa-book-open"></i> Student Hub</div>
          <ul className="navlinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#dashboard">DashBoard</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <button id="darkmodebtn">🌙</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div id="headinghome" className="font-playfair font-bold">Your Study Cafe☕</div>
          <p id="phome">StudentHub is one cozy place for all of your student life-track tasks, monitor goals and a lot more. Consider it as your own campus productivity hub!!</p>
          <div className="hero-buttons">
            <a className="btn" id="btn1" href="#dashboard">Start Exploring</a>
            <a className="btn" id="btn2" href="#about">Learn More</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/images/home1.png" alt="sticynoteimg" />
        </div>
      </section>

      <section className="dashboard-section" id="dashboard">
        <h3 className="font-playfair font-bold text-3xl">YOUR DASHBOARD</h3>
        <h1 className="font-playfair font-bold text-2xl mb-2">Everything at a Glance</h1>

        <div className="dashboard-grid">
          <div className="card weather-card">
            <span className="icon"><i className="fa-solid fa-cloud-sun"></i></span>
            <h3 className="font-playfair font-bold">WEATHER</h3>
            <p className="big-text">31°C</p>
            <p>Lucknow</p>
            <p className="mt-1 mb-1">Sunny</p>
            <button className="font-playfair p-1">Refresh ↻</button>
          </div>

          <div className="card task-card">
            <span className="icon"><i className="fa-solid fa-note-sticky"></i></span>
            <h3 className="font-playfair font-bold"><a href="#taskmanager">TASK MANAGER</a></h3>
            <p className="big-text"><span>3</span> / 7</p>
            <p>4 remaining</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: "42%" }}></div>
            </div>
          </div>

          <div className="card goal-card">
            <span className="icon"><i className="fa-solid fa-bullseye"></i></span>
            <h3 className="font-playfair font-bold">WEEKLY GOALS</h3>
            <p className="big-text">2 left</p>
            <p>5 of 7 done ✓</p>
            <div className="progress-bar">
              <div className="progress goal-progress"></div>
            </div>
          </div>

          <div className="card streak-card">
            <span className="icon"><i className="fa-solid fa-hourglass"></i></span>
            <h3 className="font-playfair font-bold"><a href="#taskmanager">POMODORO TIMER</a></h3>
            <p className="text-1xl font-bold mt-4 mb-4">25 min focus · 5 min break</p>
            <p>Keep Going!</p>
          </div>
        </div>

        <div className="quote-card">
          <div className="quote-content">
            <h3 className="font-semibold mb-2">☕ Quote of the Day</h3>
            <p>"Don't watch the clock; do what it does. Keep going."</p>
            <p className="mb-3">- Sam Levenson</p>
            <button className="text-sm">New Quote ↻</button>
          </div>
          <div className="quote-image">
            <img src="/images/studydesk.jpeg" alt="a study desk image" />
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPONENTS — will become real components next */}
      <div className="components-grid p-6" id="taskmanager">
        <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md">
          <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Task Manager</h2>
          <p className="text-cafe-mid">Coming soon as a React component...</p>
        </div>

        <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md">
          <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Pomodoro Timer</h2>
          <p className="text-cafe-mid">Coming soon as a React component...</p>
        </div>
      </div>

      <section className="github-section">
        <h1 className="mt-2 mb-1 p-2 font-playfair font-bold text-3xl">
          <i className="fa-solid fa-magnifying-glass"></i> Github Profile Finder
        </h1>
        <p>Search any Github profile.</p>
        <div className="github-search">
          <input type="text" placeholder="Enter Github username" />
          <button>Fetch Profile</button>
        </div>
        <div></div>
      </section>

      <section className="aboutclass" id="about">
        <h1 className="font-playfair font-bold text-1xl mb-3">About</h1>
        <p>Hi! I am Raghvi Agarwal, a first year CSE student heading to second year. I am currently exploring the web development domain. StudentHub is a page for all students to keep track of their tasks and ease their already stressed life.</p>
        <p>In week 1, I built a landing page using HTML, CSS and JavaScript...</p>
        <p>In week 2, I added two interactive components...</p>
      </section>

      <footer id="foot">
        <div className="logo"><i className="fa-solid fa-book-open"></i> Student Hub</div>
        <p>Built by Raghvi Agarwal - 2026</p>
        <a href="#home">Back to Top ↑</a>
      </footer>
    </>
  )
}

export default App
