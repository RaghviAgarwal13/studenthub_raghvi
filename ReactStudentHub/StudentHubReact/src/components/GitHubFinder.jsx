import React from 'react'

const GitHubFinder = () => {
  return (
    <>
    <div>
        </div>
      <section className="github-section">
    <h1 className=" mt-2 mb-1 p-2 font-playfair font-bold text-3xl "><i className="fa-solid fa-magnifying-glass"></i>Github Profile Finder</h1>
    <p>Search any Github profile.</p>
    <div className="github-search">
        <input type="text" id="githubInput" placeholder="Enter Github username"/>
        <button id="githubBtn">Fetch Profile</button>

    </div>
    <div id="githubProfile">

    </div>
    </section>
    <div/>
    </>
  )
}

export default GitHubFinder
