import React, { Component } from 'react'
import Card from './Card.js'
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
            })
            .catch((error) => {
                this.setState({ isLoading: false, error: error })
            })
    }

    displayTabs() {
        const tabList = this.homePageData.map((subject, idx) => <Tab key={subject[1]['id']} subject={subject} id={idx} />)
        console.log(tabList)

        return <>{tabList}</>
    }

    displayTabContent()
    {
        const contentPerTab = this.homePageData.map((subject,idx) => <TabContent key={subject[1]['id']} subject={subject} id={idx} />)
        return <>{contentPerTab}</>
    }

    render() {

        return (

            <section className="courses">

                <h1>A board selection of courses</h1>
                <p className="mb-0">Choose from 185,000 online video courses with new additions published every month</p>


                {(this.state.isLoading ? (<div>Loading...</div>)
                    :
                    (<>
                        {
                            this.state.error ? (
                                <div>{this.state.error}</div>
                            ) :
                                (
                                    <>
                                        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                            {this.displayTabs()}
                                        </ul>
                                        <div class="tab-content w-100" id="myTabContent">
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