import React from 'react'

export const ShowStatusImges = ({ imgsrc }) => {

    return (
        <div className='d-flex justify-content-end w-50'>
            {
                imgsrc?.map((data, i) =>
                    imgsrc.length > 1 ?
                        <img key={i} className='rounded-circle' src={data.profile_image.small} alt="" /> :
                        <img key={i} className='rounded-circle' src={data.profile_image.medium} alt="" />
                )
            }
        </div>
    )
}
