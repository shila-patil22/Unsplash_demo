import React from 'react'
import './style.css'

export const OpenBtn = ({ statusImgsData }) => {

    const status = statusImgsData.status === 'closed'
    return (
        <div className={`open_btn ${status ? 'red' : ''}`}>
            <div className='circle'></div>
            {statusImgsData.status}
        </div>
    )
}
