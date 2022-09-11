import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CollapsableText from './CollapsableText'


export class SingleReview extends Component {

    likeClickHandler = () => 
    {

    }

    dislikeClickHandler = () => 
    {

    }

    render() {
        const { data, displayStars,idx } = this.props
        return (
            <div id={`review${idx}`} className={idx == 0? 'single-review single-review-first' : 'single-review'}>
                <div className='profile-pic-container'>
                    <div className='profile-pic'>
                        <h3>{data.user.initials}</h3>
                    </div>
                </div>
                <div className='review-body'>
                    <h2>{data.user.public_display_name}</h2>

                    <div className='rating-creationDate-container'>
                        <span className='rating'>{displayStars(data.rating, true)}</span> <span className='creation-date'>{data.created_formatted_with_time_since}</span>
                    </div>
                    <CollapsableText content={data.content_html} maxH={3.1*16} />
                    {/* <p className='comment'>
                        {data.content}
                    </p> */}
                    <span>Was this review helpful?</span>
                    <div className='review-buttons'>
                        <button onClick={this.likeClickHandler} className='like'><FontAwesomeIcon icon="fa-regular fa-thumbs-up" /></button>
                        <button onClick={this.dislikeClickHandler} className='dislike'><FontAwesomeIcon icon="fa-regular fa-thumbs-down" /></button>
                        <a href='#'>Report</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleReview