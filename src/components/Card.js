import React, { Component } from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

class Card extends Component {

    //Function to display right amount stars according to the rate
    displayStars = (rate) => {
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

    displayInstName() {
        const inst = this.props.course['visible_instructors'];
        let result = ""
        for (let person in inst) {
            if (person != 0) { result += ',' }
            result += (inst[person]['display_name'])
        }


        return <>{result}</>
    }

    render() {
        const { course, idx,full } = this.props
        return (

            <li className={`course${idx}`} key={course['id']}>
                <Link to={course['url']} state={full}>
                    <div className='singleCourse'>
                        <img alt={course['title']} src={course['image_240x135']} />
                        <h3 className="fs-7 fw-bold">{course.title}</h3>
                        <span className='inst-name'>{this.displayInstName()}</span>
                        <div className='rating'>
                            <span>{course['rating'].toPrecision(2)}</span>
                            <div className="stars">
                                {this.displayStars(course['rating'])}
                            </div>
                            <span className='usersNum'>({course['num_reviews'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})</span>
                        </div>
                        <div>
                            <span className="price">{`E£${course['price']}`}</span> <span className="prev-price">{`E£${course['original_price']}`}</span>
                        </div>
                    </div>
                </Link>
            </li>

        )

    };
}

export default Card