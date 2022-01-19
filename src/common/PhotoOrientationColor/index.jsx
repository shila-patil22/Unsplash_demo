import React, { useState } from 'react'
import {  ChevronDown, CreditCard, Smartphone, Square } from 'react-feather';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './style.css'

export const PhotoOrientationColor = ({ title, items, setdropdownParam, dropdownParam }) => {
    const [isOpen, setIsOpen] = useState(false);
    const checkDropdown = (item) => {
        title === "Any Orientation" ? setdropdownParam({ ...dropdownParam, orientation: item }) : setdropdownParam({ ...dropdownParam, order_by: item })
    }
    return (
        <ButtonDropdown
            isOpen={isOpen}
            toggle={() => {
                setIsOpen(!isOpen);
            }}
            direction='down'
            className='dropdown'
        >
            <DropdownToggle style={{ background: 'transparent', color: 'black', border: 'none' }} >
                <span style={{ color: '#6c757d' }}>{title}</span><ChevronDown width={16} className='me-3' />
            </DropdownToggle>
            <DropdownMenu>
                {
                    items.map((item, key) => {
                        return (<>
                            <DropdownItem key={key} value={item.label} onClick={() => checkDropdown(item.label)} className='d-block'>
                                {item.value === 'Landscape' && <CreditCard color='#d1d1d1' width='18px' className='me-2' />}
                                {item.value === 'Portrait' && <Smartphone color='#d1d1d1' width='18px' className='me-2' />}
                                {item.value === 'Square' && <Square color='#d1d1d1' width='18px' className='me-2' />}
                                {item.value}
                            </DropdownItem>
                        </>
                        )
                    })
                }
            </DropdownMenu>
        </ButtonDropdown>
    )
}
