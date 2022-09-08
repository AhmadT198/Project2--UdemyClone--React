import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

function SingleCoursePage(props) {
    const location = useLocation();
    const data = location.state;

    return (
        <>
            <div className='single-course-page'>
                <Header data={data['header']} />
                <Main data={data} />
            </div>
        </>
    )
}

export default SingleCoursePage