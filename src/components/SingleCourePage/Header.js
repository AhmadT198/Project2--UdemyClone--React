import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(props) {
    const { data,displayStars } = props

    const formatNum = (num) => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

   
    const displayInsts = () => {
        const inst = data['instructor']
        let result = []
        for (let person in inst) {
            if (person != 0) { result.push(', ') }
            result.push(<a key={`person${person+1}`} className='inst-name' href="#">{inst[person]}</a>)
        }

        return <>{result}</>
    }
    console.log(data['branches'])
    return (
        <header>
            <div className='header-bar'>
                <h2>{data['title']}</h2>
                <p>
                    <a href="#">
                        <span className='rating'>
                            <span className='rating-num'>{data['rating'].toPrecision(2)}</span>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </span>
                        <span className='review-num'>{`(${formatNum(data['num_reviews'])} ratings)`}</span>
                    </a>
                    <span className='student-num'>{`${formatNum(data['num_students'])} students`}</span>
                </p>
            </div>


            <section className='header-content'>
                <div className='header-content-container'>

                    <p className='path'>
                        <span className='first'>
                            <a href="#">{data['branches'][0]}</a>
                        </span>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xs" />
                        <span>
                            <a href="#">{data['branches'][1]}</a>
                        </span>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xs" />
                        <span>
                            <a href="#">{data['branches'][2]}</a>
                        </span>
                    </p>


                    <h1>{data['title']}</h1>
                    <h3>{data['intro']}</h3>


                    <p className='stats'>
                        <a href="#">
                            <span className='rating'>
                                <span className='rating-num'>{data['rating'].toPrecision(2)}</span>
                                {displayStars(data['rating'],false)}
                            </span>
                            <span className='review-num'>{`(${formatNum(data['num_reviews'])} ratings)`}</span>
                        </a>
                        <span className='student-num'>{`${formatNum(data['num_students'])} students`}</span>
                    </p>



                    <p className='instructors'>
                        Created By {displayInsts()}
                    </p>

                    <p className='other-details'>
                        <span className='last-mod'>
                            <FontAwesomeIcon className="other-icons" icon="fa-solid fa-circle-exclamation" /> Last Updated {`${data['lastUpdated']['month']}/${data['lastUpdated']['year']}`}
                        </span>
                        <span className='lang'>
                            <FontAwesomeIcon className="other-icons" icon="fa-solid fa-globe" /> {data['lang']}
                        </span>
                        <span className='subtitles'>
                            <FontAwesomeIcon className="other-icons" icon="fa-solid fa-closed-captioning" /> {data['subtitles']}
                        </span>
                    </p>
                </div>

            </section>
            
        </header>

    )
}

export default Header