import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLinkClickHandler } from 'react-router-dom';


class AccordionItem extends Component {
    // console.log(data)

    displayContentLength = (contentLength) => {
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

    iconClickHandler = () => 
    {
        const {data} = this.props;
        const ic = document.getElementById("icon" + data['index'])
        
        ic.classList.toggle('rot')
      
    }

    render(){
        const { data } = this.props;

        return (
            <div class="accordion-item">
                <h2 class="accordion-header" id={`panelsStayOpen-heading${data['index']}`}>
                    <button    onClick={this.iconClickHandler} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${data['index']}`} aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <div><h2><FontAwesomeIcon id={`icon${data['index']}`} className="acc-icon" icon="fa-solid fa-chevron-down" />{data['title']}</h2> <span>{data['lecture_count']} lectures • {this.displayContentLength(data['content_length_text'])}</span></div>
                    </button>
                </h2>
                <div id={`panelsStayOpen-collapse${data['index']}`} class="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${data['index']}`}>
                    <div class="accordion-body">
                        <ul>
                            {data.items.map((lesson) => {
                                return <li>


                                    {lesson.can_be_previewed ? (
                                        <>

                                            <span className='lesson-title'>
                                                <FontAwesomeIcon className='lesson-icon' icon={lesson.icon_class} />
                                                <a href="#" className='lesson-link'>{lesson.title}</a>
                                            </span>
                                            <span className='lesson-details'>
                                                <a href="#" className='lesson-link'>Preview</a>
                                                {lesson.content_summary}
                                            </span>


                                        </>
                                    ) : (
                                        <>
                                            <span className='lesson-title'>
                                                <FontAwesomeIcon className='lesson-icon' icon={lesson.icon_class} />
                                                {lesson.title}
                                            </span>
                                            <span className='lesson-details'>{lesson.content_summary}</span>

                                        </>
                                    )}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccordionItem