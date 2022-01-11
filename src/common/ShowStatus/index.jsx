import React from 'react'
import { Image, User, Users, Zap } from 'react-feather'
import { OpenBtn } from '../OpenBtn'
import './style.css'

export const ShowStatus = () => {
    return (
        <div className="showstatus_wrapper">
            <div className="showstatus_row">
                <div className='d-flex'>
                    <Zap color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Status</span>
                </div>
                <OpenBtn/>
            </div>
            <hr />
            <div className="showstatus_row">
                <div className='d-flex'>
                    <User color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Curator</span>
                </div>
                <svg width="20" height="20" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
            </div>
            <hr />
            <div className="showstatus_row">
                <div className='d-flex'>
                    <Image color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Contributions</span>
                </div>
                <span>1423</span>
            </div>
            <hr />
            <div className="showstatus_row">
                <div className='d-flex'>
                    <Users color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Top contributors</span>
                </div>
                <div className='d-flex justify-content-between w-50'>
                    <img className='rounded-circle' src="https://images.unsplash.com/profile-1639329667129-63e7ed9f0bb3image?dpr=2&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt="" />
                    <img className='rounded-circle' src="https://images.unsplash.com/profile-1492187901140-48ac7eff801c?dpr=2&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt="" />
                    <img className='rounded-circle' src="https://images.unsplash.com/profile-1631743195207-eb9dfe3d13b9image?dpr=2&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt="" />
                    <img className='rounded-circle' src="https://images.unsplash.com/profile-1631577432737-bd4d6a1e42a7image?dpr=2&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt="" />

                </div>
            </div>

        </div>
    )
}
