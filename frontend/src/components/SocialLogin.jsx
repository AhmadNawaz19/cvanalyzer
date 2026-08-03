import React from 'react'
import {FaFacebook, FaGoogle, FaGithub} from 'react-icons/fa'

import './styles/sociallogin.css'
import axios from 'axios'

const SocialLogin = () => {


  const googleLogin = async () =>{ 
    const response = await axios.post('http://localhost:8000/socialLogin')
  }

  return (
        <div id="socialLogin">
          <h4 onClick={googleLogin}><FaGoogle id='google'/> <span style={{marginLeft:'3px'}}>google</span></h4>
          <h4><FaFacebook id='facebook'/> <span style={{marginLeft:'3px'}}>facebook</span></h4>
          <h4><FaGithub id='github'/> <span style={{marginLeft:'3px'}}>github</span></h4>
        </div>
  )
}

export default SocialLogin