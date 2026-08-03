import React from 'react'
import './styles/history.css'

const History = React.memo(() => {
  return (
    <div id='history'>
      <div id="header">
        <h2>Name</h2>
        <h2>Rating</h2>
        <h2>Date</h2>
      </div>
      <div className="recentUpload">
        <h3>AhmadNawaz.pdf</h3>
        <h3>5/10</h3>
        <h3>13/4/2026</h3>
      </div>
      <div className="recentUpload">
        <h3>AhmadNawaz.pdf</h3>
        <h3>5/10</h3>
        <h3>13/4/2026</h3>
      </div>
      <div className="recentUpload">
        <h3>AhmadNawaz.pdf</h3>
        <h3>5/10</h3>
        <h3>13/4/2026</h3>
      </div>
      <div className="recentUpload">
        <h3>AhmadNawaz.pdf</h3>
        <h3>5/10</h3>
        <h3>13/4/2026</h3>
      </div>
      <div className="recentUpload">
        <h3>AhmadNawaz.pdf</h3>
        <h3>5/10</h3>
        <h3>13/4/2026</h3>
      </div>
    </div>
  )
})

History.displayName = 'history'
export default History