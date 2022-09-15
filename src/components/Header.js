import React, { Component } from 'react'
import headerImg from './alarm.png'

class Header extends Component {
    render() {
        return (
            <header>

                <img alt="Header Image" src={headerImg} className="header-img" />
                <div className="banner">
                    <h1>New to Udemy? Lucky you.</h1>
                    <p>Courses start E£169. Get your new-student offer before it expires.</p>
                </div>

            </header>

        )
    }
}

export default Header