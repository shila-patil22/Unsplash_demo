import React from 'react'
import { Image, User, Users, Zap } from 'react-feather'
import { OpenBtn } from '../OpenBtn'
import { ShowStatusImges } from '../ShowStatusImges'
import './style.css'

export const ShowStatus = ({ statusImgs }) => {
    console.log(statusImgs, "statusImgsstatusImgs");
    return (
        <div className="showstatus_wrapper">
            <div className="showstatus_row">
                <div className='d-flex'>
                    <Zap color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Status</span>
                </div>
                <OpenBtn />
            </div>
            <hr />
            <div className="showstatus_row">
                <div className='d-flex'>
                    <User color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Curator</span>
                </div>
                <ShowStatusImges  imgsrc={statusImgs}/>
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
                <ShowStatusImges multipleImg />
                    

                </div>
            </div>

        </div>
    )
}
