import React, { Component } from 'react'
import AccordionItem from './AccordionItem'


class Accordion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accState: 'Expand'
    }
  }


  displayContentLength = (contentLength) => {
    let len = contentLength.split(":")
    let result = "";
    result += len[0] + 'h ';
    if (len[2] > "30") {
      result += len[1] + "1" + 'm'
    }
    else {
      result += len[1] + 'm';
    }

    return <>{result}</>
  }

  expandCloseAllHandler = () => {
    if (this.state.accState == 'Expand') {

      const el = document.querySelectorAll('[aria-expanded="false"]');
      for (let x of el) {
        x.click();
      }

      this.setState({ accState: 'Collapse' })
    }
    else {
      
      const el = document.querySelectorAll('[aria-expanded="true"]');
      for (let x of el) {
        x.click();
      }

      this.setState({ accState: 'Expand' })
    }
  }


  render() {
    const { data } = this.props
    const { lecNum, contentLength } = data
    let sectionNum = data['sections'].length;
    return (
      <>
        <div className='sections-intro'>
          <div className='details'>
            {sectionNum} sections • {lecNum} lectures • {this.displayContentLength(contentLength)} total length
          </div>
          <button onClick={this.expandCloseAllHandler} className='close-expand-all'>{this.state.accState} all sections</button>
        </div>

        <div class="accordion" id="accordionExample">

          {data['sections'].map((data) => <AccordionItem data={data} />)}

        </div>
        <button className='buy-now'>X more sections</button>
      </>
    )
  }
}

export default Accordion