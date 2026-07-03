import React from 'react'
import { useState } from 'react'
import notices from '../data/announcements'

const Announcements = () => {
  const [query, setQuery] = useState('')

  // this runs fresh every time the component renders
  // it is not stored in state, it is just calculated here
  var filteredNotices = notices.filter(function (notice) {
    return notice.title.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <section className="aboutclass">
      <h1 className="font-playfair font-bold text-3xl mb-6 p-3">Announcements & Events</h1>

      <div className="mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search notices..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      <div className="space-y-4 max-w-2xl mx-auto text-left">
        {filteredNotices.map(function (notice) {
          return (
            <div
              key={notice.id}
              className="newcomp bg-cafe-card rounded-2xl p-5 border border-amber-200 shadow-md"
            >
              <div className="flex justify-between items-start">
                <h2 className="font-playfair font-bold text-xl text-cafe-brown">{notice.title}</h2>
                <span className="text-xs text-cafe-mid">{notice.date}</span>
              </div>
            </div>
          )
        })}

        {filteredNotices.length === 0 && (
          <p className="text-cafe-mid font-bold text-xl text-center mt-6">
            No notices match your search.
          </p>
        )}
      </div>
    </section>
  )
}

export default Announcements