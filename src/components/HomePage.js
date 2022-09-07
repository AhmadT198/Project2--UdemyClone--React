import React, { Component } from 'react'
import Courses from './Courses'
import Header from './Header'


class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Courses />

        </main>

      </>
    )
  }
}

export default HomePage