import React, { lazy, Suspense } from 'react'
import './styles/navbar.css'
import './styles/signIn.css'
import { Link } from "react-router-dom";

const Navbar = React.memo(() => {
    return (
        <div id='header'>
            <nav>
                <div id="logo">
                    <h1>Find</h1>
                </div>
                <div id="links">
                    <Link id='homelink' to="/">Home</Link>
                    <div id="homeLogin">
                        <Link to='/login' id='login'>Login</Link>
                        <div id='userProfile'>
                            <Link to='/profile'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
})

Navbar.displayName = 'navbar'
export default Navbar