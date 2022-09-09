import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'

class StudentFeedback extends Component {

    render() {
        const { data, displayStars } = this.props

        console.log(data['ratingDistribution'])
        let total = 0;
        let result = []
        for (let x of data.ratingDistribution) {
            total += x.count
        }

        for (let x of data.ratingDistribution) {
            let per = Math.round((x.count / total) * 100) + '%';
            console.log(per)
            let stars = [];
            for(let y = 0; y < x.rating; y++)
            {
                stars.push(<FontAwesomeIcon icon="fa-solid fa-star" />)
            }
            for(let y = 0; y < 5 - x.rating; y++)
            {
                stars.push(<FontAwesomeIcon icon="fa-regular fa-star" />)
            }
            result.push(
                <div className='single-rating'>  
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: per }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="star-count">
                        {stars}
                    </div>
                    <a href="#" className='feedback-percent'>{per}</a>
                </div>
            )
        }
        result = result.reverse()


        return (
            <section className='student-feedback'>
                <h2>Student feedback</h2>
                <div className='feedback-container'>
                    <div className='feedback-rate'>
                        <h1>{data['header']['rating'].toPrecision(2)}</h1>
                        {displayStars(data['header']['rating'])}
                        <p>Course Rating</p>
                    </div>
                    <div className='meters'>
                        {result}
                    </div>
                </div>
            </section>
        )
    }
}

export default StudentFeedback