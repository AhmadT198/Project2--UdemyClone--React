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
                // console.log(data)
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

        return <>{tabList}</>
    }

    displayTabContent() {
        const query = new URLSearchParams(window.location.search)
        const searchVal = query.get('search');

        let modHomePageData = []; //Final form of displayed data

        //if the searchVal is empty or null, take the full data as it is
        if (searchVal == null || searchVal.trim() == "") modHomePageData = this.homePageData;
        else {
            //if not, search:
            for (let x of this.homePageData) { //iterate over all the data, x=> courses per tab
                //make a temporary copy with empty list of courses
                let tmp = [x[0], { ...x[1] }];
                tmp[1].items = []

                //iterate over all the courses in the tab
                for (let y of x[1].items) {
                    //if it matches the searchValue, add it to the temporary copy
                    if (y.title.toLowerCase().includes(searchVal.toLowerCase())) tmp[1].items.push(y);
                }

                //Push the modified form of the tab
                modHomePageData.push(tmp);
            }
        }

        const contentPerTab = modHomePageData.map((subject, idx) => {
            let fullData = {};
            // console.log(subject)
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
