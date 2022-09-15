import React from 'react'

function Section(props) {

    return (
        <section className={props.className}>
            <h2>{props.title}</h2>
            {props.content}
        </section>
    )

}

export default Section