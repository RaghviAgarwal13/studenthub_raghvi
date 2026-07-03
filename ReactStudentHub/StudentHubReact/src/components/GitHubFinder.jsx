import React, { useState } from 'react'

const GithubFinder = () => {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const fetchGithubProfile = async () => {
    var trimmedUsername = username.trim()

    if (trimmedUsername === '') {
      setErrorMsg('Please enter a username.')
      setProfile(null)
      return
    }

    setLoading(true)
    setErrorMsg('')
    setProfile(null)

    try {//error handling
      var response = await fetch('https://api.github.com/users/' + trimmedUsername)
      var data = await response.json()

      if (data.message === 'Not Found') {
        setErrorMsg('User not found.')
        setLoading(false)
        return
      }

      setProfile(data)
      setLoading(false)
    } catch (error) {
      setErrorMsg('Something went wrong.')
      setLoading(false)
      console.log(error)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchGithubProfile()
    }
  }

  return (
    <section className="github-section mt-10 mb-10">
      <h1 className="mt-2 mb-1 p-2 font-playfair font-bold text-3xl">
        <i className="fa-solid fa-magnifying-glass"></i> Github Profile Finder
      </h1>
      <p>Search any Github profile.</p>

      <div className="github-search">
        <input
          type="text"
          id="githubInput"
          placeholder="Enter Github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button id="githubBtn" onClick={fetchGithubProfile}>Fetch Profile</button>
      </div>

      <div id="githubProfile">
        {loading === true && (
          <p>Loading profile...</p>
        )}

        {errorMsg !== '' && (
          <p>{errorMsg}</p>
        )}

        {profile !== null && (
          <div className="github-card flex flex-col items-center text-center">
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-32 h-32 rounded-full mb-4"
            />

            <h2 className="font-bold p-2">{profile.login}</h2>

            <p className="mb-1">Followers: {profile.followers}</p>

            <p className="mb-1">Following: {profile.following}</p>

            <p className="mb-1">Public Repositories: {profile.public_repos}</p>

            <p className="mb-1">📍 {profile.location || 'Not Available'}</p>

            <a href={profile.html_url} target="_blank" rel="noreferrer">
              Visit Profile
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default GithubFinder