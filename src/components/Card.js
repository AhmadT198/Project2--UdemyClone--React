import React, { Component } from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    render() {
        let course = this.props.course;
        return (

            <li className={`course${course.id}`}>
                <a href="#">
                    <div className='singleCourse'>
                        <img alt={course.title} src={course.image} />
                        <h3>{course.title}</h3>
                        <span className='inst-name'>{course.instructor}</span>
                        <div className='rating'>
                            <span>{course.rating[0]}</span>
                            <div className="stars">
                                {this.displayStars(course.rating[0])}
                            </div>
                            <span className='usersNum'>{course.rating[1]}</span>
                        </div>
                        <div>
                            <span className="price">{`E£${course['new-price']}`}</span> <span className="prev-price">{`E£${course['original-price']}`}</span>
                        </div>
                    </div>
                </a>
            </li>

        )

    };
}

console.log(typeof Card)
export default Card