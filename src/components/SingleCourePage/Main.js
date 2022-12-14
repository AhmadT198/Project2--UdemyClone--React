import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from './Accordion'
import CollapsableText from './CollapsableText'
import Instructor from './Instructor'
import StudentFeedback from './StudentFeedback'
import Reviews from './Reviews'
import SideBar from './SideBar'
import Section from './Section'
import SingleCourseNavbar from './SingleCourseNavbar'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            navClass: "",
            sideBarClass: ""
        }
    }



    scorllHandler = () => {

        const headerBannerBottom = document.getElementsByClassName("header-banner")[0].getBoundingClientRect().bottom;
        const headerSectionBottom = document.getElementsByClassName("header-content")[0].getBoundingClientRect().bottom;
        const nav = document.getElementsByTagName("nav")[1].getBoundingClientRect().height;

        
        const footerTop = document.getElementsByTagName('footer')[0].getBoundingClientRect().top + window.scrollY; //absolute position of the footer top
        const sideBarHeight = document.getElementById("sidebar").getBoundingClientRect().height;
       

        //if the header banner passed the second navBar
        if (nav + headerSectionBottom <= headerBannerBottom) {
            this.setState({
                navClass: "nav-fixed"
            })

            //if the sidebar didnt collide with the footer
            if (footerTop > window.scrollY + 16 + sideBarHeight) {
                this.setState({
                    sideBarClass: "sidebar-container-fixed"
                })
                const sideBar = document.getElementById("sidebar");
                sideBar.style.top = "1rem";
            }
            else //if the sidebar collided with the footer
            {
                this.setState({
                    sideBarClass: "sidebar-container-rel"
                })


                //make sure the navbar is at the top of the footer
                const sideBar = document.getElementById("sidebar");
                const topVal = (footerTop - sideBarHeight - 20 * 16);   // - 20 rem , rem = 16px
                sideBar.style.top = topVal + "px";
            }

        } else {
            this.setState({
                navClass: "nav-rel",
                sideBarClass: "sidebar-container-rel"
            })

            //make sure the navbar is at the top
            const sideBar = document.getElementById("sidebar");
            sideBar.style.top = "1rem";
        }



    }

    componentDidMount() {
        window.addEventListener('scroll', this.scorllHandler)
        window.scrollTo(0, 0);
    }

    shouldComponentUpdate(nextProps, nextStates) {
        if (nextStates.navClass != this.state.navClass || nextStates.sideBarClass != this.state.sideBarClass) return true;
        else return false;
    }
    render() {
        console.log('main-rerendered')
        const { data, displayStars } = this.props
        return (
            <main>
                <div className='border-container'>
                    <SingleCourseNavbar navClass={this.state.navClass} />
                </div>


                <div className='main-container'>
                    <SideBar data={data} sideBarClass={this.state.sideBarClass} />

                    <Section className='what-youll-learn' title="What you'll learn" content={<ul>{data['curriculum']['whatYoullLearn'].map((point) => <li key={point}><FontAwesomeIcon className='check-icon' icon="fa-solid fa-check" /><span>{point}</span></li>)}</ul>} />

                    <Section className='course-content' title='Course Content' content={<Accordion data={data['curriculum']} />} />

                    <Section className='req' title="Requirements" content={<ul>{data['req'].map((r) => <li key={r}>{r}</li>)}</ul>} />

                    <Section className='desc' title='Description' content={<CollapsableText content={data['description']} maxH={12.1 * 16} />} />

                    <Section className='instructors' title='Instructors' content={data['instructors'].map((data) => <Instructor key={data.id} data={data} />)} />

                    <StudentFeedback data={data} displayStars={displayStars} />

                    <Reviews data={data['reviews']} displayStars={displayStars} />
                </div>
            </main>
        )
    }
}

export default Main