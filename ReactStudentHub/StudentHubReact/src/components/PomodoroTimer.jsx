import React from 'react'

const PomodoroTimer = () => {
  return (
    <>
    <div>
        
  {/* <!-- POMODORO TIMER --> */}
  <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md min-h-[500px] ">
    <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Pomodoro Timer</h2>
    <p className="text-cafe-mid font-semibold mb-6">   25 min focus · 5 min break</p>

    {/* <!-- Mode Toggle --> */}
    <div className="flex gap-2 mb-6">
      <button id="focusMode"
        className="flex-1 py-2 rounded-xl bg-cafe-brown text-cafe-gold font-semibold text-sm transition-all">
        Focus 
      </button>
      <button id="breakMode"
        className="flex-1 py-2 rounded-xl bg-transparent border border-cafe-mid text-cafe-mid font-semibold text-sm transition-all">
        Break 
      </button>
    </div>

    {/* <!-- Timer Display --> */}
    <div className="text-center mb-6">
      <div id="timerDisplay"
        className="text-7xl font-bold font-playfair tracking-tight">
        25:00
      </div>
      <p id="timerLabel" className="text-cafe-mid font-semibold mt-2">Ready to focus?</p>
    </div>

    {/* <!-- Controls --> */}
    <div className="flex gap-3 justify-center mb-6">
      <button id="startBtn"
        className="border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
        Start
      </button>
      <button id="pauseBtn"
        className="border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
        Pause
      </button>
      <button id="resetBtn"
        className="border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
        Reset
      </button>
    </div>

    {/* <!-- Session Count --> */}
    <div className="text-center border-t border-amber-900 pt-4">
      <p className="text-cafe-mid font-semibold text-sm">Sessions completed today</p>
      <p id="sessionCount" className="text-6xl font-bold font-playfair tracking-tight ">0</p>
    </div>
  </div>
    </div>
    </>
  )
}

export default PomodoroTimer
