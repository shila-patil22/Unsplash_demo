import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavlinkRender } from './Menu/NavlinkRender'

export const AppLayout = ({ children }) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/s/:photos'){
            setIsHeaderVisible(false)
        }
    }, [location])
    return (
        <>
            {
                isHeaderVisible && <NavlinkRender />
            }
            {children}
        </>
    )
}
