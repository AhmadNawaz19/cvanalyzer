import React from 'react'
import './styles/footer.css'

const Footer = React.memo(() => {
  return (
    <div>
        <footer className="footer">
  <div className="footer-container">

    {/* Logo / About */}
    <div className="footer-section">
      <h2>CV Analyzer</h2>
      <p>
        Smart AI-powered resume analysis platform that helps
        improve ATS score and job opportunities.
      </p>
    </div>

    {/* Quick Links */}
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#benefit">Benefits</a></li>
        <li><a href="#dashboardPic">Dashboard</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-section">
      <h3>Contact</h3>
      <p>Email: ahmadnawaz.codes@gmail.com</p>
      <p>Phone: +92 330 1659292</p>
      <p>Pakistan</p>
    </div>

    {/* GitHub */}
    <div className="footer-section">
      <h3>GitHub</h3>
      <a href="https://github.com/AhmadNawaz19">https://github.com/AhmadNawaz19</a>
    </div>

  </div>

  {/* Bottom */}
  <div className="footer-bottom">
    <p>© 2026 CV Analyzer. All Rights Reserved.</p>
  </div>
</footer>
    </div>
  )
})

Footer.displayName = 'footer'
export default Footer