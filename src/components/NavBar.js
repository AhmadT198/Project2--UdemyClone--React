import React, { Component } from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <>
                <nav className='main-nav'>
                    <FontAwesomeIcon icon="fa-solid fa-bars" className="menu" />
                    <Link to='/'>
                        <img alt="Logo" className='img-logo' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" />
                    </Link>
                    <a href="#" className="navOption categories">Categories</a>

                    <div className="search-bar">
                        <form action="#/">
                            <button id="search-submit" type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" /></button>
                            <input id="search-bar" placeholder="Search for anything" type="text" name="search" />
                        </form>
                    </div>

                    <a href="#" className="navOption udemy-bus"><span>Udemy Business</span></a>

                    <a href="#" className="navOption teach">Teach on Udemy</a>

                    <div className=''>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-alternate" size="lg" />
                        <a href="#" className="navOption shopping-cart"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" /></a>
                    </div>
                    <a href="#" className="navOption navBtn">Log in</a>

                    <a href="#" className="navOption navBtn sign-up">Sign Up</a>

                    <a href="#" className="navOption navBtn"> <FontAwesomeIcon icon="fa-solid fa-globe" size="lg" /> </a>
                </nav>

            </>
        )
    }
}

export default NavBar