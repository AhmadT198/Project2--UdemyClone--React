import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLinkClickHandler } from 'react-router-dom';


class AccordionItem extends Component {

    iconClickHandler = () => 
    {
        //Method for making the accordion icon rotate when expanded

        
        const {data} = this.props;
        const ic = document.getElementById("icon" + data['index'])
        
        ic.classList.toggle('rot')
      
    }


    render(){
        const { data,idx } = this.props;
        return (
            <div id={`accItem${idx}`} className="accordion-item">
                <h2 className="accordion-header" id={`panelsStayOpen-heading${data['index']}`}>
                    <button onClick={this.iconClickHandler} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${data['index']}`} aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <div><h2><FontAwesomeIcon id={`icon${data['index']}`} className="acc-icon" icon="fa-solid fa-chevron-down" />{data['title']}</h2> <span>{data['lecture_count']} lectures • {this.props.displayContentLength(data['content_length_text'])}</span></div>
                    </button>
                </h2>
                <div id={`panelsStayOpen-collapse${data['index']}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${data['index']}`}>
                    <div className="accordion-body">
                        <ul>
                            {data.items.map((lesson) => {

                                return <li key={lesson.id}>


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