import React, { Component } from 'react'
import './Style.css'

class Card extends Component {
    render() {
        let course = this.props.course;
        console.log(course);
        return (
            
                <li className={"course"+course.id}>
                    <a href="#">
                        <div className='singleCourse'>
                            <img alt={course.title} src={course.image} />
                            <h3>{course.title}</h3>
                            <span className='inst-name'>{course.instructor}</span>
                            <div className='rating'>
                                <span>{course.rating[0]}</span>
                                <div className="stars">

                                    <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span className='usersNum'>{course.rating[1]}</span>
                            </div>
                            <div>
                                <span className="price">{"E£"+course['new-price']}</span> <span className="prev-price">{"E£"+course['original-price']}</span>
                            </div>
                        </div>
                    </a>
                </li>
            
        )

    };
}

export default Card