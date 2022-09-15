import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SingleReview from './SingleReview'


class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: this.props.data.map((rev, idx) => <SingleReview idx={idx} data={rev}  key={rev.id} displayStars={this.props.displayStars} />)
        }
    }

    showMoreReviewsClickHandler = () => {
        //Method that shows the invisible tab when button is clicked

        //Hide the button
        const btn = document.getElementById("show-more-reviews")
        btn.classList.add('d-none');

        //Unhide the hidden tabs
        for (let x = 8; x < this.state.reviews.length; x++) {
            const review = document.getElementById(`review${x}`)
            review.classList.remove('d-none')
        }


    }


    componentDidMount() {
        if (this.state.reviews.length > 8) {

            //Hide all the extra reviews
            for (let x = 8; x < this.state.reviews.length; x++) {
                const tab = document.getElementById(`review${x}`)
                tab.classList.add('d-none')
            }
  
        }
        else {
            //if it doesnt exceed 8, hide the "Show button"
            const btn = document.getElementById("show-more-accordion")
            btn.classList.toggle('d-none');

        }
    }
    render() {
        const { data, displayStars } = this.props
        // console.log(data)
        return (
            <section className='reviews'>
                <h2>Reviews</h2>
                <div className='filter-bar'>
                    <div className="search-bar review-search">

                        <input id="review-search-bar" placeholder="Search reviews" type="text" name="search" />
                        <button id="review-search-submit" type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" /></button>
                    </div>
                    <select placeholder="hi" className='rating-filter' name="rating" id="rating" defaultValue="all">
                        <option value='all'>All ratings</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>

                <div className='review-content'>
                    {this.state.reviews}
                </div>
                <button id="show-more-reviews" onClick={this.showMoreReviewsClickHandler} className='white-button'>See more reviews</button>

            </section>
        )
    }
}

export default Reviews