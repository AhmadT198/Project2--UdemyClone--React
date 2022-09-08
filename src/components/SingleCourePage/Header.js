import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(props) {
    const { data } = props

    const formatNum = (num) => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

    const displayStars = (rate) => {
        const result = [];
        for (let x = 0; x < Math.floor(rate); x++) {
            result.push(<FontAwesomeIcon className="singleStar" icon="fa-solid fa-star" />)
        }

        let frac = Number(rate) - Math.floor(rate);
        frac = frac.toPrecision(1);

        if (frac >= 0.3 && frac <= 0.7) { //Half a star from 0.3 to 0.7
            result.push(<FontAwesomeIcon className="singleStar" icon="fa-solid fa-star-half-stroke" />)


        } else if (frac >= 0.8) //full star for 0.8 and 0.9
        {

            result.push(<FontAwesomeIcon className="singleStar" icon="fa-solid fa-star" />)

        }

        return <>{result}</>


    }

    const displayInsts = () => {
        const inst = data['instructor']
        let result = []
        for (let person in inst) {
            if (person != 0) { result.push(', ') }
            result.push(<a class='inst-name' href="#">{inst[person]}</a>)
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
                                {displayStars(data['rating'])}
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