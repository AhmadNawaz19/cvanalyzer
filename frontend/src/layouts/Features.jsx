import React from 'react'
import './styles/features.css'

const Features = React.memo(() => {
  return (
    <div id="features">
      <h2 id="features-title">Powerful Resume Analysis Features</h2>
      {/* <p id="features-subtitle">
        Get didetailed insights and improve your resume with AI-driven feedback.
      </p> */}

      <div id="features-container">
        
        <div className="feature-card">
          <h3>📊 ATS Score</h3>
          <p>
            Get an instant Applicant Tracking System (ATS) score to see how well
            your resume performs against industry standards.
          </p>
        </div>

        <div className="feature-card">
          <h3>🧠 Skill Analysis</h3>
          <p>
            Analyze your skills and identify strengths and gaps based on job
            requirements and market demand.
          </p>
        </div>

        <div className="feature-card">
          <h3>❌ Missing Keywords</h3>
          <p>
            Discover important keywords missing from your resume that recruiters
            are actively searching for.
          </p>
        </div>

        <div className="feature-card">
          <h3>✍️ Smart Suggestions</h3>
          <p>
            Get personalized suggestions to improve formatting, wording, and
            overall impact of your resume.
          </p>
        </div>

      </div>
    </div>
  );
})
Features.displayName = 'features'
export default Features;