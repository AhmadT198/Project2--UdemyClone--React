import React from 'react'
import Card from './Card'
import CarouselSlide from './CarouselSlide'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function TabContent(props) {
    const { id, full } = props
    const tabTitle = props.subject[0]
    const tabData = props.subject[1]

    const courseList = tabData['items'].map((data, idx) => {
        const urlTitle = data['published_title'];
        // console.log(urlTitle)

        let fullCourseData;
        if (full != undefined) {
            if (full.hasOwnProperty(urlTitle)) { fullCourseData = full[urlTitle] }
            else { fullCourseData = full[Object.keys(full)[0]] }
        }
        return <Card course={data} key={data['id']} full={fullCourseData} idx={idx} />
        return <></>;
    }
    )


    const makeCarouselSlides = () => {
        let slideCount = Math.ceil(courseList.length / 5)
        let result = []
        for (let x = 1; x <= slideCount; x++) {
            let currSlide = courseList.slice((x - 1) * 5, Math.min((x - 1) * 5 + 5, courseList.length))

            result.push(<CarouselSlide content={currSlide} key={x} id={x - 1} />)
        }
        return <>{result}</>
    }


    return (
        <>
            <div className={`tab-pane fade show${(id == 0 ? ' active' : '')}`} id={`${tabTitle}-tab-pane`} role="tabpanel" aria-labelledby={`${tabTitle}-tab`}
                tabIndex={id}>

                <section className="course-details">

                    <div className="course-intro">
                        <h2 className="fs-4 fw-bold">{tabData['header']}</h2>
                        <p>{tabData['description']}</p>
                        <button className="navOption navBtn">{`Explore ${tabData['title']}`}</button>
                    </div>

                    <ul id="courses-list" className="p-0">
                        <div id={`${tabTitle}`} className="text-decoration-none carousel slide w-100" data-bs-interval="false">

                            <div className="carousel-inner">
                                {makeCarouselSlides()}
                            </div>
                            <button
                                className="border border-light prevBtnLeft carousel-control-prev btnHeight CustomTop btnWidth ms-1 rounded-circle"
                                type="button" data-bs-target={`#${tabTitle}`} data-bs-slide="prev">
                                <span aria-hidden="true"><FontAwesomeIcon icon="fa-solid fa-chevron-left" size="xl" /></span>
                            </button>
                            <button
                                className="border nextBtnRight border-light carousel-control-next btnHeight CustomTop btnWidth rounded-circle"
                                type="button" data-bs-target={`#${tabTitle}`} data-bs-slide="next">
                                <span aria-hidden="true"><FontAwesomeIcon icon="fa-solid fa-chevron-right" size="xl" /></span>
                            </button>
                        </div>

                    </ul>
                </section>
            </div>
        </>
    )
}

export default TabContent