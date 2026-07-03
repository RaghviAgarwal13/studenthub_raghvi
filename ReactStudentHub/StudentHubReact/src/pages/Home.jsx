import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="page-fade">
    <div className="hero" >
        <div className="hero-left">
    <div id="headinghome" className="font-playfair font-bold ">Your Study Cafe☕</div>
    <p id="phome">StudentHub is one cozy place for all of your student life-track tasks, monitor goals and a lot more.Consider it as your own campus productivity hub!!</p>
    <div className="hero-buttons">

       <Link className="btn" id="btn1" to="/dashboard">Start Exploring</Link>

      <Link className="btn" id="btn2" to="/about">Learn More</Link>


    </div>
  </div>

  <div className="hero-right">
    <img src="images/home1.png" alt="sticynoteimg"/>

  </div>
    </div>
    </div>
    </>
  )
}

export default Home
