import React, { useState, useEffect } from 'react'

const PomodoroTimer = () => {
  const [focusMinutes, setFocusMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [isFocusMode, setIsFocusMode] = useState(true)
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [label, setLabel] = useState('Ready to focus?')

  // load saved session count right when this state is created
  // (a function passed to useState only runs once, on the first render)
  const [sessionCount, setSessionCount] = useState(() => {
    var saved = JSON.parse(localStorage.getItem('sh_pomodoro'))
    if (saved) {
      var today = new Date().toDateString()
      if (saved.date === today) {
        return saved.count
      }
    }
    return 0
  })

  // save session count every time it changes
  useEffect(() => {
    var data = {
      date: new Date().toDateString(),
      count: sessionCount
    }
    localStorage.setItem('sh_pomodoro', JSON.stringify(data))
  }, [sessionCount])

  // this runs the countdown every second, only when isRunning is true
  useEffect(() => {
    if (isRunning === false) {
      return
    }

    var interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, secondsLeft])

  // check if timer hit 0
  useEffect(() => {
    if (secondsLeft === 0 && isRunning === true) {
      setIsRunning(false)

      if (isFocusMode === true) {
        setSessionCount(sessionCount + 1)
        setLabel('Session complete!')
        setTimeout(() => {
          switchMode(false)
        }, 1500)
      } else {
        setLabel('Break over! Ready?')
        setTimeout(() => {
          switchMode(true)
        }, 1500)
      }
    }
  }, [secondsLeft])

  const switchMode = (focus) => {
    setIsFocusMode(focus)
    if (focus === true) {
      setSecondsLeft(focusMinutes * 60)
      setLabel('Ready to focus?')
    } else {
      setSecondsLeft(breakMinutes * 60)
      setLabel('Take a breather!')
    }
    setIsRunning(false)
  }

  const startTimer = () => {
    setIsRunning(true)
    if (isFocusMode === true) {
      setLabel('Focusing...')
    } else {
      setLabel('On break...')
    }
  }

  const pauseTimer = () => {
    setIsRunning(false)
    setLabel('Paused')
  }

  const resetTimer = () => {
    setIsRunning(false)
    if (isFocusMode === true) {
      setSecondsLeft(focusMinutes * 60)
    } else {
      setSecondsLeft(breakMinutes * 60)
    }
  }

  const handleFocusChange = (e) => {
    var value = Number(e.target.value)
    if (value < 1){//validation
      return
    }
    setFocusMinutes(value)
    if (isFocusMode === true) {
      setSecondsLeft(value * 60)
    }
  }

  const handleBreakChange = (e) => {
    var value = Number(e.target.value)
    if(value < 1 ){
      return
    }
    setBreakMinutes(value)
    if (isFocusMode === false) {
      setSecondsLeft(value * 60)
    }
  }

  const formatTime = (totalSeconds) => {
    var mins = Math.floor(totalSeconds / 60)
    var secs = totalSeconds % 60
    if (secs < 10) {
      secs = '0' + secs
    }
    if (mins < 10) {
      mins = '0' + mins
    }
    return mins + ':' + secs
  }

  return (
    <div className="newcomp bg-cafe-card rounded-2xl p-6 border border-amber-200 shadow-md">
      <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-4">Pomodoro Timer</h2>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="text-cafe-mid font-semibold text-xs block mb-1">Focus (minutes)</label>
          <input
            type="number"
            min="1"
            value={focusMinutes}
            onChange={handleFocusChange}
            disabled={isRunning}
            className="inputrow w-full px-3 py-1 rounded-lg border border-amber-300 bg-amber-50 text-cafe-brown text-sm"
          />
        </div>
        <div className="flex-1">
          <label className="text-cafe-mid font-semibold text-xs block mb-1">Break (minutes)</label>
          <input
            type="number"
            min="1"
            value={breakMinutes}
            onChange={handleBreakChange}
            disabled={isRunning}
            className="inputrow w-full px-3 py-1 rounded-lg border border-amber-300 bg-amber-50 text-cafe-brown text-sm"
          />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => switchMode(true)}
          className={isFocusMode ? 'flex-1 py-2 rounded-xl bg-cafe-brown text-cafe-gold font-semibold text-sm transition-all' : 'flex-1 py-2 rounded-xl bg-transparent border border-cafe-mid text-cafe-mid font-semibold text-sm transition-all'}
        >
          Focus
        </button>
        <button
          onClick={() => switchMode(false)}
          className={!isFocusMode ? 'flex-1 py-2 rounded-xl bg-cafe-brown text-cafe-gold font-semibold text-sm transition-all' : 'flex-1 py-2 rounded-xl bg-transparent border border-cafe-mid text-cafe-mid font-semibold text-sm transition-all'}
        >
          Break
        </button>
      </div>

      <div className="text-center mb-6">
        <div className=" pmdr text-7xl font-bold font-playfair tracking-tight">
          {formatTime(secondsLeft)}
        </div>
        <p className="text-cafe-mid font-semibold mt-2">{label}</p>
      </div>

      <div className="flex gap-3 justify-center mb-6">
        <button onClick={startTimer} className=" pmdr border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
          Start
        </button>
        <button onClick={pauseTimer} className=" pmdr border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
          Pause
        </button>
        <button onClick={resetTimer} className="pmdr border border-cafe-mid text-cafe-brown px-6 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all hover:text-cafe-gold">
          Reset
        </button>
      </div>

      <div className="text-center border-t border-amber-900 pt-4">
        <p className="text-cafe-mid font-semibold text-sm">Sessions completed today</p>
        <p className=" pmdr text-6xl font-bold font-playfair tracking-tight">{sessionCount}</p>
      </div>
    </div>
  )
}

export default PomodoroTimer