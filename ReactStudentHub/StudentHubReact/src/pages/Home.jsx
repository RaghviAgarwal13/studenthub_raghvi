import React from 'react'

const Home = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-left">
    <div id="headinghome" className="font-playfair font-bold ">Your Study Cafe☕</div>
    <p id="phome">StudentHub is one cozy place for all of your student life-track tasks, monitor goals and a lot more.Consider it as your own campus productivity hub!!</p>
    <div className="hero-buttons">

       <a className="btn" id="btn1" href="#dashboard">
           Start Exploring
       </a>

       <a className="btn" id="btn2" href="#about">
           Learn More
       </a>

    </div>
  </div>

  <div className="hero-right">
    <img src="images/home1.png" alt="sticynoteimg"/>

  </div>
    </div>
    </>
  )
}

export default Home
