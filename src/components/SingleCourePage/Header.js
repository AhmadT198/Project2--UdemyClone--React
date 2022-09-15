import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(props) {
    const { data, displayStars } = props
    // console.log(data)
    const headerData = data['header']
    const formatNum = (num) => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }


    const displayInsts = () => {
        const inst = headerData['instructor']
        let result = []
        for (let person in inst) {
            if (person != 0) { result.push(', ') }
            result.push(<a key={`person${person + 1}`} className='inst-name' href="#">{inst[person]}</a>)
        }

        return <>{result}</>
    }
    return (
        <header>
            <div className='header-banner'>


                <div className='main-header-banner'>
                    <h2>{headerData['title']}</h2>
                    <p>
                        <a href="#">
                            <span className='rating'>
                                <span className='rating-num'>{headerData['rating'].toPrecision(2)}</span>
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                            </span>
                            <span className='review-num'>{`(${formatNum(headerData['num_reviews'])} ratings)`}</span>
                        </a>
                        <span className='student-num'>{`${formatNum(headerData['num_students'])} students`}</span>
                    </p>
                </div>


                <div className='media-query-header-banner'>
                    <div className='price-container'>
                        <h1 className='price'>{`E£${data['sidebar']['price']}`}</h1>
                    </div>
                    <button className='white-button'>Buy now</button>
                </div>

                
            </div>


            <section className='header-content'>
                <div className='header-container'>
                    <div className='general-container'>
                        <p className='path'>
                            <span className='first'>
                                <a href="#">{headerData['branches'][0]}</a>
                            </span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xs" />
                            <span>
                                <a href="#">{headerData['branches'][1]}</a>
                            </span>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xs" />
                            <span>
                                <a href="#">{headerData['branches'][2]}</a>
                            </span>
                        </p>


                        <a href="#" className='image-container'>
                            <img className='course-img' alt={headerData['title']} src='https://img-b.udemycdn.com/course/750x422/394676_ce3d_5.jpg' />
                            <img className='bg' alt='black' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg?20201103073518" />
                            <div className='image-shadow'></div>
                            <h2>Preview this course</h2>
                            <FontAwesomeIcon className='play-icon' icon="fa-solid fa-circle-play" />
                        </a>

                        <h1>{headerData['title']}</h1>
                        <h3>{headerData['intro']}</h3>


                        <p className='stats'>
                            <a href="#">
                                <span className='rating'>
                                    <span className='rating-num'>{headerData['rating'].toPrecision(2)}</span>
                                    {displayStars(headerData['rating'], false)}
                                </span>
                                <span className='review-num'>{`(${formatNum(headerData['num_reviews'])} ratings)`}</span>
                            </a>
                            <span className='student-num'>{`${formatNum(headerData['num_students'])} students`}</span>
                        </p>



                        <p className='instructors'>
                            Created By {displayInsts()}
                        </p>

                        <p className='other-details'>
                            <span className='last-mod'>
                                <FontAwesomeIcon className="other-icons" icon="fa-solid fa-circle-exclamation" /> Last Updated {`${headerData['lastUpdated']['month']}/${headerData['lastUpdated']['year']}`}
                            </span>
                            <span className='lang'>
                                <FontAwesomeIcon className="other-icons" icon="fa-solid fa-globe" /> {headerData['lang']}
                            </span>
                            <span className='subtitles'>
                                <FontAwesomeIcon className="other-icons" icon="fa-solid fa-closed-captioning" /> {headerData['subtitles']}
                            </span>
                        </p>

                        <div className='media-query'>
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

                            <p className='dets'>30-Day Money-Back Guarantee</p>
                            <p className='dets'>Full Lifetime Access</p>

                            <div className='sidebar-links'>
                                <a href="#">Share</a>
                                <a href="#">Gift this course</a>
                                <a href="#">Apply Coupon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </header >

    )
}

export default Header