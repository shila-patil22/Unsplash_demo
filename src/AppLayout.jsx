import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarCom } from './Navbar'

export const AppLayout = ({ children }) => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/demo'){
            setIsHeaderVisible(false)
        console.log(location, "location----");
        }

    }, [location])
    console.log(isHeaderVisible,"ishdrg");
    return (
        <>
            {
                isHeaderVisible && <NavbarCom />
            }
            {children}
        </>
    )
}
