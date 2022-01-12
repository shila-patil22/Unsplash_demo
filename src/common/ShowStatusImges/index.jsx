import React from 'react'

export const ShowStatusImges = ({ imgsrc ,multipleImg}) => {
    return (
        <div className='d-flex justify-content-between w-50'>
            <img className={`rounded-circle ${!multipleImg ? 'w-25':''}`} src={imgsrc} alt="" />
        </div>
    )
}
