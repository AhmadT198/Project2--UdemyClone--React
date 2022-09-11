import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Pop extends Component {
  getMonthName(date) {
    date = date.split('-');
    let result = "";
    let months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    result = months[Number(date[1])] + " " + date[0];
    return result
  }

  render() {
    const { course, idx } = this.props
    return (
      <div className="pop">
        <h2>{course.title}</h2>
        <p className='pop-last-update'>Updated <span>{this.getMonthName(course.last_update_date)}</span></p>
        <p className='pop-details'><span>{course.content_info}</span> <span>{course.instructional_level}</span> Subtitles</p>
        <p className='pop-intro'>{course.headline}</p>
        <ul className='pop-what-youll-learn'>
          {course.objectives_summary.map((point, idx) => <li><FontAwesomeIcon className='pop-icon' icon="fa-solid fa-check" /><div>{point}</div></li>)}
        </ul>
        <div className='pop-buttons'>
          <button className='pop-add-to-cart'>Add to cart</button>
          <button className='pop-fav'><FontAwesomeIcon icon="fa-regular fa-heart" /></button>
        </div>
      </div>
    )
  }
}

export default Pop