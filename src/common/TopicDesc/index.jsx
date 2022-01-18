import React from 'react'

export const TopicDesc = ({ title, description }) => {
    return (

        <div className='d-flex flex-column mb-3'>
            <h1>{title}</h1>
            <span className='w-75' dangerouslySetInnerHTML={{ __html: description }} ></span>
        </div>
    )
}
