import React, { Component } from 'react'
import AccordionItem from './AccordionItem'
import { v4 as uuid } from 'uuid';

const displayContentLength = (contentLength) => {
  //Method that takes time in the form of "Hours:Minutes:Seconds" or "Minutes:Seconds" and returns it in the form of  5h 2m  or  34m

  let len = contentLength.split(":")
  let result = "";

  if (len.length == 3) {
    result += Number(len[0]) + 'h ';
    if (Number(len[2]) >= 30) {
      result += Number(len[1]) + Number("1") + 'm'
    }
    else {
      result += Number(len[1]) + 'm';
    }
  }
  else {

    if (Number(len[1]) >= 30) {
      result += Number(len[0]) + Number("1") + 'm'
    }
    else {
      result += Number(len[0]) + 'm';
    }
  }
  return <>{result}</>
}

class Accordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accState: 'Expand', //State of the accordion,  All expanded or All Collapsed
      invisibleTabsCount: 0, //No. of invisible Accordion tabs (when no. of tabs passes 10)
      accTabs: this.props.data['sections'].map((data, idx) => <AccordionItem key={data.title} data={data} idx={idx} displayContentLength={displayContentLength} />) //Accordion Tabs
    }

  }




  expandCloseAllUtility = () => {
    //The Utility Method of Expanding or Collapsing all Accordion tabs at once


    if (this.state.accState == 'Expand') {
      this.setState({ accState: 'Collapse' }) //Change Text/State

      //Expand all the closed tabs
      const el = document.querySelectorAll('[aria-expanded="false"]');
      for (let x of el) {
        x.click();
      }

    }
    else {
      this.setState({ accState: 'Expand' }) //Change Text/State

      //Close all expanded tabs
      const el = document.querySelectorAll('[aria-expanded="true"]');
      for (let x of el) {
        x.click();
      }

    }
  }


  expandCloseAllHandler = () => {
    //Method that executes the expand/collapse operation


    this.showInvisibleTabsClickHandler() //Show the invisible tabs first
    this.expandCloseAllUtility() //then, execute 

  }

  showInvisibleTabsClickHandler = () => {
    //Method that shows the invisible tab when button is clicked

    //Hide the button
    const btn = document.getElementById("show-more-accordion")
    btn.classList.add('d-none');

    //Unhide the hidden tabs
    for (let x = 10; x < this.state.accTabs.length; x++) {
      const tab = document.getElementById(`accItem${x}`)
      tab.classList.remove('d-none')
    }


  }

  componentDidMount() {
    //After the Component renders, check if the number of tabs exceeds 10


    if (this.state.accTabs.length > 10) {

      //Hide all the extra tabs
      for (let x = 10; x < this.state.accTabs.length; x++) {
        const tab = document.getElementById(`accItem${x}`)
        tab.classList.add('d-none')
      }


      //if it exceeds 10, Update the number of invisible Tabs
      this.setState({
        invisibleTabsCount: this.state.accTabs.length - 10
      });
    }
    else {
      //if it doesnt exceed 10, hide the "Show button"
      const btn = document.getElementById("show-more-accordion")
      btn.classList.toggle('d-none');

    }

    //Open the first tab
    const el = document.querySelector('[data-bs-target="#panelsStayOpen-collapse1"]');
    console.log(el)
    el.click()
  }


  render() {
    const { data } = this.props
    const { lecNum, contentLength } = data
    let sectionNum = data['sections'].length;

    return (
      <>
        <div className='sections-intro'>
          <div className='details'>
            {sectionNum} sections • {lecNum} lectures • {displayContentLength(contentLength)} total length
          </div>
          <button onClick={this.expandCloseAllHandler} className='close-expand-all'>{this.state.accState} all sections</button>
        </div>

        <div className="accordion" id="accordionExample">

          {this.state.accTabs}

        </div>
        <button id="show-more-accordion" onClick={this.showInvisibleTabsClickHandler} className='show-more white-button'>{this.state.invisibleTabsCount} more {this.state.invisibleTabs == 1 ? 'section' : 'sections'}</button>

      </>
    )
  }
}

export default Accordion