import React from 'react'
import { useMemo } from 'react';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import Pop from './Pop';

function Card(props) {
    const { course, idx, full } = props

    //Function to display right amount stars according to the rate
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

    const displayInstName = () => {
        const inst = course['visible_instructors'];
        let result = ""
        for (let person in inst) {
            if (person != 0) { result += ',' }
            result += (inst[person]['display_name'])
        }


        return <>{result}</>
    }

    const hoverHandler = () => {
        const pop = document.getElementById(this.props.course.id);
        pop.classList.remove('d-none');
    }
    const leaveHandler = () => {
        const pop = document.getElementById(this.props.course.id);
        pop.classList.add('d-none')
    }


    const stars = useMemo(() => displayStars(course['rating']), [course['rating']]);
    // console.log(course['url'])
    return (
        <>
            <li onMouseOver={hoverHandler} onMouseLeave={leaveHandler} className={`course${idx}`} key={course['id']}>
                <Link to={course['url']} state={full}>
                    <div className='singleCourse'>
                        <img alt={course['title']} src={course['image_240x135']} />
                        <h3 className="fs-7 fw-bold">{course.title}</h3>
                        <span className='inst-name'>{displayInstName()}</span>
                        <div className='rating'>
                            <span>{course['rating'].toPrecision(2)}</span>
                            <div className="stars">
                                {stars}
                            </div>
                            <span className='usersNum'>({course['num_reviews'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</span>
                        </div>
                        <div>
                            <span className="price">{`E£${course['price']}`}</span> <span className="prev-price">{`E£${course['original_price']}`}</span>
                        </div>
                    </div>
                </Link>
                <div id={course.id} className={`pop-container popover-${idx % 5} d-none`}>
                    <Pop course={course} idx={idx} />

                </div>

            </li>

        </>
    )


}

export default Card