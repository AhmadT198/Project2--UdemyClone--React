import React, { Component } from 'react'
import Courses from './Courses'
import Header from './Header'


class HomePage extends Component {

 

  render() {

    // console.log("homepage render => " , this.state.full)
    return (
      <>
        <div className='home-page'>
          <Header />
          <main>
            <Courses />
      
          </main>
        </div>
      </>
    )

  }
}

export default HomePage