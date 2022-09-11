import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from './Accordion'
import CollapsableText from './CollapsableText'
import Instructor from './Instructor'
import StudentFeedback from './StudentFeedback'
import Reviews from './Reviews'
import SideBar from './SideBar'


export class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            navClass: "",
            sideBarClass: ""
        }
    }



    scorllHandler = () => {
        // console.log(window.scrollY)
        const footerTop = document.getElementsByTagName('footer')[0].getBoundingClientRect().top;
        const sb = document.getElementsByClassName("udemy-business");
        const banner = document.getElementsByClassName("header-banner")[0].getBoundingClientRect().bottom;
        const header = document.getElementsByClassName("header-content")[0].getBoundingClientRect().bottom;
        const nav = document.getElementsByTagName("nav")[1].getBoundingClientRect().height;


        //if the header banner passed the second navBar
        if (header <= banner + nav) {
            this.setState({
                navClass: "nav-fixed"
            })

            //if the sidebar didnt collide with the footer
            if (footerTop > sb[0].getBoundingClientRect().bottom) {
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
        window.scrollTo(0,0);
    }

    shouldComponentUpdate(nextProps, nextStates) {
        if (nextStates.navClass != this.state.navClass || nextStates.sideBarClass != this.state.sideBarClass) return true;
        else return false;
    }
    render() {
        // console.log('main-rerendered')
        const { data, displayStars } = this.props
        return (
            <main>
                <div className='border-container'>
                    <nav className={this.state.navClass}>
                        <div className='main-container'>
                            <div className='nav-container'>
                                <button>Overview</button>
                                <button>Curriculum</button>
                                <button>Instructor</button>
                                <button>Reviews</button>
                            </div>
                        </div>
                    </nav>
                </div>


                <div className='main-container'>
                    <SideBar data={data} sideBarClass={this.state.sideBarClass} />


                    <section className='what-youll-learn'>
                        <h2>What you'll learn</h2>
                        <ul>
                            {
                                data['curriculum']['whatYoullLearn'].map((point, idx) => <li key={idx}><FontAwesomeIcon className='check-icon' icon="fa-solid fa-check" /><span>{point}</span></li>)
                            }

                        </ul>
                    </section>



                    <section className='course-content'>
                        <h2>Course Content</h2>
                        <Accordion data={data['curriculum']} />
                    </section>


                    <section className='req'>
                        <h2>Requirements</h2>
                        <ul>
                            {data['req'].map((r, idx) => <li key={idx}>{r}</li>)}
                        </ul>
                    </section>


                    <section className='desc'>
                        <h2>Description</h2>
                        <CollapsableText content={data['description']} maxH={12.1 * 16} />
                    </section>

                    <section className='instructors'>
                        <h2>Instructors</h2>
                        {
                            data['instructors'].map((data) => <Instructor key={data.id} data={data} />)
                        }
                    </section>

                    <StudentFeedback data={data} displayStars={displayStars} />
                    <Reviews data={data['reviews']} displayStars={displayStars} />
                </div>
            </main>
        )
    }
}

export default Main