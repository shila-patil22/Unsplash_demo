import React from 'react'
import { useParams } from 'react-router-dom';
import { ShowStatus } from '../../common/ShowStatus';
import { useGetUnsplashTopicDescQuery } from '../../Redux/reduxApiCalling';

export const Topics = () => {
    const { topics } = useParams()
    const { data,  isLoading } = useGetUnsplashTopicDescQuery(topics)

    return (
        !isLoading ?
            <div className='d-flex justify-content-between align-items-center w-75 p-3 mx-auto flex-sm-wrap flex-lg-nowrap flex-wrap'>
                <div className='d-flex flex-column'>
                    <h1>{data.title}</h1>
                    <span className='w-50'>{data.description}</span>
                </div>
                <ShowStatus />
            </div> : 'loading....'
    )
}