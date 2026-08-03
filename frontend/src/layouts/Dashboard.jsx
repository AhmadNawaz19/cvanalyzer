import React from 'react'
import './styles/dashboard.css'


const Dashboard = React.memo(() => {
  return (
    <div id='dashboardPic'>
        <img src="/dashboard.png" alt="" />
    </div>
  )
})

Dashboard.displayName = 'dashboard'
export default Dashboard