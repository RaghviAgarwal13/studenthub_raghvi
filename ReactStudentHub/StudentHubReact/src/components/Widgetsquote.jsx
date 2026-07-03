import React, { useState } from 'react'

const quotes = [
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Success is the sum of small efforts repeated daily.",
    author: "Robert Collier"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  }
]

const Widgetsquote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const getNewQuote = () => {
    var randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  return (
    <>
    <div>
      <h3 className="font-playfair font-bold text-3xl ">YOUR DASHBOARD</h3>
    <h1 className="font-playfair font-bold text-2xl mb-2">Everything at a Glance</h1>

    <div className="dashboard-grid">

        {/* <!-- Weather --> */}
        <div className="card weather-card">
            <span className="icon"><i className="fa-solid fa-cloud-sun"></i></span>
            <h3 className="font-playfair font-bold">WEATHER</h3>

            <p className="big-text" id="temp">31°C</p>

            <p>Lucknow</p>
            <p className="mt-1 mb-1" id="weather-desc">Sunny</p>

            <button className="font-playfair p-1" id="refreshWeather">
                Refresh ↻
            </button>
        </div>

        {/* <!-- Tasks --> */}
        <div className="card task-card">
            <span className="icon"><i className="fa-solid fa-note-sticky"></i></span>
            <h3 className="font-playfair font-bold"><a href="#taskmanager">TASK MANAGER</a></h3>

            <p className="big-text">
                <span id="doneTasks">3</span> / 7
            </p>

            <p>4 remaining</p>

            <div className="progress-bar">
                <div className="progress" style={{width:"42%"}}></div>
            </div>
        </div>

        {/* <!-- Goals --> */}
        <div className="card goal-card">
            <span className="icon"><i className="fa-solid fa-bullseye"></i></span>
            <h3 className="font-playfair font-bold">WEEKLY GOALS</h3>

            <p className="big-text">2 left</p>

            <p>5 of 7 done ✓</p>

            <div className="progress-bar">
                <div className="progress goal-progress"></div>
            </div>
        </div>

        {/* <!-- Streak --> */}
        <div className="card streak-card">
            <span className="icon"><i className="fa-solid fa-hourglass"></i></span>
            <h3 className="font-playfair font-bold"><a href="#taskmanager">POMODORO TIMER</a></h3>
            <p className="text-1xl font-bold mt-4 mb-4" id="streak">
                 25 min focus · 5 min break
            </p>

            <p>Keep Going!</p>
        </div>

    </div>

    {/* <!-- Quote Card --> */}
    <div className="quote-card">
        <div className="quote-content">
                    <h3 className="font-semibold mb-2">☕ Quote of the Day</h3>

        <p id="quote">
            "{currentQuote.text}"
        </p>

        <p id="author" className="mb-3">- {currentQuote.author}</p>

        <button id="newQuote" className="text-sm" onClick={getNewQuote}>
            New Quote ↻
        </button>

        </div>
        <div className="quote-image">
            <img src="images/studydesk.jpeg" alt="a study desk image"/>

        </div>
    </div>
    </div>
    </>
  )
}

export default Widgetsquote