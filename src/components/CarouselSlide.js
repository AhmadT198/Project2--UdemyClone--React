import React from 'react'

function CarouselSlide(props) {
    const { content, id } = props
    return (
        <>
            <div className={`carousel-item${id == 0 ? ' active' : ''}`}>
                <div className='row g-0'>
                    {content}
                </div>
            </div>
        </>
    )
}

export default CarouselSlide