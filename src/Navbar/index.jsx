import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavbarBrand, NavbarText } from 'reactstrap'
import { SearchBar } from '../common/Searchbar';
import { Menu, Facebook, Instagram, Twitter } from 'react-feather';
import { Popover, PopoverBody } from 'reactstrap';
import './style.css'


export const NavbarCom = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <Navbar>
            <NavbarBrand href="/" >
                <svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
            </NavbarBrand>
            <Nav className="me-auto w-100">
                <SearchBar round />
            </Nav>
            <NavbarText className='d-none d-md-block explore_link'>
                Explore
            </NavbarText>
            <NavbarText>
                <Menu id="Popover" type='button' className='m-3' />
                <Popover placement="bottom" trigger="focus" isOpen={popoverOpen} target="Popover" toggle={toggle}>
                    <PopoverBody className='popover_body' >
                        <Twitter />
                        <Facebook />
                        <Instagram />
                    </PopoverBody>
                </Popover>
            </NavbarText>
        </Navbar>
    )
}
