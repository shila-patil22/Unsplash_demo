import React, { useState } from 'react'
import { Check, ChevronDown } from 'react-feather';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './style.css'


export const PhotoOrientationColor = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ButtonDropdown
            isOpen={isOpen}
            toggle={() => {
                setIsOpen(!isOpen);
            }}
            direction="down"
            className='dropdown'
        >
            <DropdownToggle style={{ background: 'transparent', color: 'black', border: 'none' }} >
                <span style={{ color: '#6c757d' }}>{title}</span><ChevronDown width={16} className='me-3' />
            </DropdownToggle>
            <DropdownMenu>
                <div className='d-flex align-items-center ps-1' >
                    <Check width={16} /><DropdownItem header>{title}</DropdownItem></div>
                {
                    items.map((item, i) => {
                        return (
                            <DropdownItem key={i} className='d-block'>{item}</DropdownItem>
                        )
                    })
                }
            </DropdownMenu>
        </ButtonDropdown>
    )
}
