import React, { Component } from 'react'
import Tab from './Tab.js'
import TabContent from './TabContent.js'
import { DataUrl } from '../Urls.js'

class Courses extends Component {

    constructor(props) {
        super(props)
        let homePageData;
        this.state = {
            isLoading: true,
            post: {},
            error: "",
            mostReleventTab: 0

        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
            error: "",
            post: {}
        })
        fetch(DataUrl)
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
        const tabList = this.homePageData.map((subject, idx) => <Tab key={subject[1]['id']} subject={subject} id={idx} active={idx == this.state.mostReleventTab} />)

        return <>{tabList}</>
    }

    displayTabContent() {
        //Getting data from search query
        const query = new URLSearchParams(window.location.search)
        const searchVal = query.get('search');


        let mostReleventTabTMP = 0; //idx of the tab with the most search results, default is the first tab
        let modHomePageData = []; //Final form of displayed data



        //if the searchVal is empty or null, take the full data as it is
        if (searchVal == null || searchVal.trim() == "") {
            modHomePageData = this.homePageData;
        }
        else {

            let maxCourseCount = 0, idx = 0;


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

                //Getting the tab with the most amount of courses to highlight it
                if (tmp[1].items.length > maxCourseCount) {
                    mostReleventTabTMP = idx;
                    maxCourseCount = tmp[1].items.length;
                }


                //Push the modified form of the tab
                modHomePageData.push(tmp);
                idx++;
            }


            //setting the tab state
            if (this.state.mostReleventTab != mostReleventTabTMP) {
                this.setState({
                    mostReleventTab: mostReleventTabTMP
                })
            }

        }

        //Making the TabContent elements
        const contentPerTab = modHomePageData.map((subject, idx) => {

            let fullData = {};

            //if the current tab has no data, Give it the python tab data
            if (this.state.post['courses'][subject[0]] != undefined
                && Object.keys(this.state.post['courses'][subject[0]]).length != 0) { fullData = this.state.post['courses'][subject[0]] }
            else { fullData = this.state.post['courses']['python_res'] }


            return <TabContent key={subject[1]['id']} subject={subject} id={idx} full={fullData} active={idx == this.state.mostReleventTab} />
        }
        )
        return <>{contentPerTab}</>
    }


    render() {
        return (

            <section className="courses">

                <h1>A board selection of courses</h1>
                <p className="mb-0">Choose from 185,000 online video courses with new additions published every month</p>


                {(this.state.isLoading ? (
                    <div class="spinner-border" role="status">
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
