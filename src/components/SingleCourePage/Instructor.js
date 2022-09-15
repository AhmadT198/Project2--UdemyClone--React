import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import CollapsableText from './CollapsableText'


class Instructor extends Component {
    formatNum(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render() {
        const { data } = this.props

        return (
            <>
                <div className='single-instructor'>
                    <a href="#" ><h1 className='inst-title'>{data['name']}</h1></a>
                    <h3 className='inst-intro'>{data['intro']}</h3>
                    <div className='profile'>
                        <img alt={data['name']} src={data['img']} />
                        <ul>
                            <li><FontAwesomeIcon className='inst-icon' icon="fa-solid fa-star" />{data['rating']} Instructor Rating</li>
                            <li><FontAwesomeIcon className='inst-icon' icon="fa-solid fa-medal" />{this.formatNum(data.revCount)} Reviews</li>
                            <li><FontAwesomeIcon className='inst-icon' icon="fa-solid fa-user" />{this.formatNum(data.studentCount)} Students</li>
                            <li><FontAwesomeIcon className='inst-icon' icon="fa-solid fa-play-circle" />{this.formatNum(data.courseCount)} Courses</li>
                        </ul>
                    </div>
                    <CollapsableText content={data['desc']} maxH={12.1*16} />
                </div>
            </>

        )
    }
}

export default Instructor