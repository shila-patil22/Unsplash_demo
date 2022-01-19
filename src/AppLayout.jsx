import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavlinkRender } from './Menu/NavlinkRender'

export const AppLayout = ({ children }) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const location = useLocation()
    useEffect(() => {
        const loc = location.pathname.split('/photo',1) || location.pathname.split('/collections',1)||location.pathname.split('/collections',0)
        if (loc) {
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
