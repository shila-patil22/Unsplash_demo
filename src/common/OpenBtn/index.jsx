import React from 'react'
import './style.css'

export const OpenBtn = ({statusImgsData}) => {
    console.log(statusImgsData.status,"statusImgsData======");
    return (
        <div className='open_btn'>
            <div className='circle'></div>
            {statusImgsData.status}
        </div>
    )
}
