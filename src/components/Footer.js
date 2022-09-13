import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='top-companies'>
                    <h2>Top companies choose <a href="">Udemy Business</a> to build in-demand career skills.</h2>
                    <div className='companies-logos'>
                        <img alt='Nasdaq' src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' />
                        <img alt='Volkswagen' src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' />
                        <img alt='Box' src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' />
                        <img alt='NetApp' src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' />
                        <img alt='Eventbrite' src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' />
                    </div>
                </div>
                <div className='links-and-language '>
                    <ul>
                        <li><a href="">Udemy Business</a></li>
                        <li><a href="">Teach on Udemy</a></li>
                        <li><a href="">Get the app</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Contact us</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Help and Support</a></li>
                        <li><a href="">Affiliate</a></li>
                        <li><a href="">Investors</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Cookie settings</a></li>
                        <li><a href="">Sitemap</a></li>
                        <li><a href="">Accessibility statement</a></li>
                    </ul>
                    <div className='btn-container'>
                        <button className='white-button'><FontAwesomeIcon icon='fa-solid fa-globe' className='footer-globe' /> English</button>
                    </div>
                </div>
                <div className='logo-and-copyright'>
                    <Link to='/'>
                        <img alt="Udemy Logo" className='img-logo' src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' />
                    </Link>
                    <span>© 2022 Udemy, Inc.</span>
                </div>

            </footer >
        )
    }
}

export default Footer