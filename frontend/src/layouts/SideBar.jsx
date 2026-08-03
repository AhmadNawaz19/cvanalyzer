import React from 'react'
import './styles/sidebar.css'
import { FaUpload, FaHistory, FaSignOutAlt } from 'react-icons/fa'
import { FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom'
import axios from 'axios';


const SideBar = React.memo(() => {

  const logout = async () => {
    const response = await axios.delete('http://localhost:8000/logout', {
      withCredentials : true,
    })
    console.log(response.data)
  }
  
  return (
    <div id='sidebar'>
      <div className="box1">
        <div id='userProfile'>
          <Link to='/profile'>
            <img id='img' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
          </Link>
        </div>
        <h3>User Name</h3>
      </div>
      <div className="box1"> <i class="fa-solid fa-cloud-arrow-up"></i> <Link to='/profile/'><h3>Upload Resume</h3></Link> </div>
      <div className="box1"> <FaHistory /><Link to='/history'><h3>History</h3></Link></div>
      <div className="box1"  ><FiSettings /> <Link to='/setting'><h3>Setting</h3></Link></div>
      <div className="box1" onClick={logout} ><FaSignOutAlt /> <h3>Log Out</h3></div>
    </div>
  )
})

SideBar.displayName = 'displayname'
export default SideBar