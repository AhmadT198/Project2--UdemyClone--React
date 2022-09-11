import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class SideBar extends Component {



    render() {
        const {data,sideBarClass} = this.props
        return (
            <section className='side-bar'>
                <a href="#" className='image-container'>
                    <img className='course-img' alt={data['header']['title']} src={data['sidebar']['image']} />
                    <img className='bg' alt='black' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg?20201103073518" />
                    <div className='image-shadow'></div>
                    <h2>Preview this course</h2>
                    <FontAwesomeIcon className='play-icon' icon="fa-solid fa-circle-play" />
                </a>
                <div id="sidebar" className={sideBarClass}>
                    <div className='bar-body'>
                        <div className='price-container'>
                            {data['sidebar']['sale'] ? (
                                <>
                                    <h1 className='price'>{`E£${data['sidebar']['price']}`}</h1>
                                    <h2 className='original-price'>{`E£${data['sidebar']['originalPrice']}`}</h2>
                                    <h2 className='sale-amount'>{((1 - data['sidebar']['price'] / data['sidebar']['originalPrice']) * 100).toPrecision(2)}% Off</h2>
                                </>
                            ) : (
                                <h1 className='price'>{`E£${data['sidebar']['price']}`}</h1>
                            )}

                        </div>
                        {data['sidebar']['sale'] ? (
                            <>
                                <div className='time-left'>
                                    <FontAwesomeIcon icon="fa-regular fa-bell" />
                                    <span>{data['sidebar']['saleTime']} {data['sidebar']['saleTime'] == 1 ? 'day' : 'days'}</span> left at this price!
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        <button className='add-to-cart'>Add to cart</button>
                        <button className='white-button'>Buy now</button>


                        <p>30-Day Money-Back Guarantee</p>

                        <h2 className='includes'>This course includes:</h2>
                        <ul className='includes-list'>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-solid fa-tv" /></div>{data['sidebar']['includes']['hours']} hours on-demand video</li>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-regular fa-file" /></div>{data['sidebar']['includes']['articles']} {data['sidebar']['includes']['articles'] == 1 ? 'article' : 'articles'}</li>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-regular fa-folder" /></div>{data['sidebar']['includes']['res']} downloadable resources</li>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-solid fa-infinity" /></div>Full lifetime access</li>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-solid fa-mobile-screen" /></div>Access on mobile and TV</li>
                            <li><div className='icon-container'><FontAwesomeIcon icon="fa-solid fa-trophy" /></div>Certificate of completion</li>
                        </ul>

                        <div className='sidebar-links'>
                            <a href="#">Share</a>
                            <a href="#">Gift this course</a>
                            <a href="#">Apply Coupon</a>
                        </div>


                    </div>
                    <div className='udemy-business'>
                        <h2>Trainging 5 or more people?</h2>
                        <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                        <button className='white-button'>Try Udemy Business</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default SideBar
