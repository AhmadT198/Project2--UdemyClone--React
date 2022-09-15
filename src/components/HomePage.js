import React, { Component } from 'react'
import CoursesSection from './CoursesSection'
import Header from './Header'


class HomePage extends Component {

 

  render() {

    // console.log("homepage render => " , this.state.full)
    return (
      <>
        <div className='home-page'>
          <Header />
          <main>
            <CoursesSection />
      
          </main>
        </div>
      </>
    )

  }
}

export default HomePage