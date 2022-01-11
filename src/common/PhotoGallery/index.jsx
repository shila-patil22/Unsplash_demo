import React from 'react'
import { useGetUnsplashTopicPhotosQuery } from '../../Redux/reduxApiCalling'

export const index = () => {
    const {data}=useGetUnsplashTopicPhotosQuery

    console.log("data",data);
    return (
        <div>
            
        </div>
    )
}
