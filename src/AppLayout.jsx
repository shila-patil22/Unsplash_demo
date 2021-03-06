import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TopicsLink } from './Menu/TopicsLink'

export const AppLayout = ({ children }) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const location = useLocation()
    useEffect(() => {
        const loc = location.pathname.split('/')[1]
        if (loc==='s'|| loc==='collections') {
            setIsHeaderVisible(false)
        }
    }, [location])
    return (
        <>
            {
                isHeaderVisible && <TopicsLink />
            }
            {children}
        </>
    )
}
