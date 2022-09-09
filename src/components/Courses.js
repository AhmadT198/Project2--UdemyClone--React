import React, { Component } from 'react'
import Tab from './Tab.js'
import TabContent from './TabContent.js'

class Courses extends Component {

    constructor(props) {
        super(props)
        let homePageData;
        this.state = {
            isLoading: true,
            post: {},
            error: ""
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
            error: "",
            post: {}
        })
        fetch('https://ahmadt198.github.io/Data/db.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ post: data, isLoading: false, error: "" })
                this.homePageData = data['HomePage']
                this.homePageData = Object.entries(this.homePageData)
                console.log(data['courses']['python'])
            })
            .catch((error) => {
                this.setState({ isLoading: false, error: error })
            })
    }

    displayTabs() {
        const tabList = this.homePageData.map((subject, idx) => <Tab key={subject[1]['id']} subject={subject} id={idx} />)

        return <>{tabList}</>
    }

    displayTabContent() {
        const contentPerTab = this.homePageData.map((subject, idx) => {
            let fullData = {};
            if (this.state.post['courses'][subject[0]] != undefined
                && Object.keys(this.state.post['courses'][subject[0]]).length != 0) { fullData = this.state.post['courses'][subject[0]] }
            else { fullData = this.state.post['courses']['python_res'] }
            return <TabContent key={subject[1]['id']} subject={subject} id={idx} full={fullData} />
        }
        )
        return <>{contentPerTab}</>
    }


    render() {

        return (

            <section className="courses">

                <h1>A board selection of courses</h1>
                <p className="mb-0">Choose from 185,000 online video courses with new additions published every month</p>


                {(this.state.isLoading ? (<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)
                    :
                    (<>
                        {
                            this.state.error ? (
                                <div>Error</div>
                            ) :
                                (
                                    <>
                                        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                            {this.displayTabs()}
                                        </ul>
                                        <div className="tab-content w-100" id="myTabContent">
                                            {this.displayTabContent()}
                                        </div>
                                    </>
                                )
                        }
                    </>)
                )
                }

            </section>
        )
    }
}

export default Courses
