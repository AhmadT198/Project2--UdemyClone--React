import React from 'react'

function SingleCourseNavbar(props) {
    return (
        <nav className={props.navClass}>
            <div className='main-container'>
                <div className='nav-container'>
                    <button>Overview</button>
                    <button>Curriculum</button>
                    <button>Instructor</button>
                    <button>Reviews</button>
                </div>
            </div>
        </nav>
    )
}

export default SingleCourseNavbar