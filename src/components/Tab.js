import React from 'react'

function Tab(props) {
    const tab = props.subject;
    // console.log("tab comp ", tab)
    const {id} = props;
    return (

        <li className="nav-item" role="presentation">
            <button className={`border-0 bg-transparent nav-link ps-0 pe-4 fs-6 fw-bold text-secondary${(id == 0 ? ' active' : '')}`} id={`${tab[0]}-tab`}
                data-bs-toggle="tab" data-bs-target={`#${tab[0]}-tab-pane`} type="button" role="tab"
                aria-controls={`${tab[0]}-tab-pane`} aria-selected={`${id == 0? 'true' : 'false'}`}>{tab[1]['title']}</button>
        </li>
    )
}

export default Tab