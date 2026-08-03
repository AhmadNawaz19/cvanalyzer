import React from 'react'
import './styles/main.css'

const Main = React.memo(() => {
  return (
    <div id='main'>
        <h1>AI Resume Analyzer</h1>
        <p>Upload your resume and get instant feedback, ATS score, and improvements.</p>
        <button>Get Started</button>
    </div>
  )
})

Main.displayName = 'main'
export default Main