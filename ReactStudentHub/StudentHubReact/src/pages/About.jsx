import React from 'react'

const About = () => {
  return (
    <>
    <div className="page-fade">

  {/* <!-- ABOUT SECTION --> */}
   <section className="aboutclass " id="about">
    <h1 className="font-playfair font-bold text-1xl mb-3">About</h1>
    <p>Hi! I am Raghvi Agarwal, a first year CSE student heading to second year. I am currently exploring the web development domain.StudentHub is a page for all student to keep track of their tasks and ease their already stressed life.</p>
    <p>In week 1,I have built a landing page using HTML,CSS and JavaScript. It consists of a navigation bar, home page, a dashboard containing a quote generator and a weather widget.It also has a github profile fetcher built by api fetch,async/await concepts</p>
    <p>In week 2, I added two interactive components-A task manager and a Pomodoro Timer.The task manager allows the user to add,complete and delete tasks while pomodoro help in focused sessions.This is persistent using local storage concept.I also have used tailwind css for dashboard components.</p>
   </section>
    </div>
    </>
  )
}

export default About
