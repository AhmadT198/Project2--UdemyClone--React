import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuid } from 'uuid';

class CollapsableText extends Component {
  constructor(props) {
    super(props)
    let content_id;
    let blur_id;
    let btn_id;
    this.state = {
       show: "more"
    }
  }
  getContent() {
    const { content } = this.props
    return <div dangerouslySetInnerHTML={{ __html: content }}>
    </div>
  }

  clickHandler = () => {

    const content = document.getElementById(this.content_id);
    const blur = document.getElementById(this.blur_id);

    if(this.state.show == 'more')
    {
      this.setState({show:"less"})
      content.classList.toggle('mh-100');
      blur.classList.toggle('d-none')
    }
    else
    {
      this.setState({show:"more"})
      content.classList.toggle('mh-100');
      blur.classList.toggle('d-none')
    }
  }
  componentDidMount()
  {
    const elHeight = document.getElementById(this.content_id).clientHeight
    const blur = document.getElementById(this.blur_id);
    const btn = document.getElementById(this.btn_id);
    const content = document.getElementById(this.content_id)
    if(elHeight > this.props.maxH)
    {
      content.style.maxHeight = this.props.maxH + "px";
    }
    else
    {
        btn.classList.add('d-none');
        blur.classList.add('d-none');
        content.classList.add('mh-100');

    }
  }
  render() {
    const { content } = this.props
    this.blur_id = uuid();
    this.content_id = uuid();
    this.btn_id = uuid();
    return (
      <>
        <div id={this.content_id} className='content-container'>
          {this.getContent()}
          <div id={this.blur_id} className='white-blur'></div>
        </div>
        <button  onClick={this.clickHandler} id={this.btn_id} className='close-expand-all'>Show {this.state.show} <FontAwesomeIcon className="acc-icon" icon="fa-solid fa-chevron-down" /></button>
      </>
    )
  }
}

export default CollapsableText