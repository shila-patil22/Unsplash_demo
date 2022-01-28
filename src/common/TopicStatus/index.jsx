import { Image, User, Users, Zap } from 'react-feather'
import { Badge } from '../Badge'
import { Avtar } from '../Avtar'
import './style.css'

export const TopicStatus = ({ statusImgsData }) => {
    return (
        <div className="showstatus-wrapper row">
            <div className="showstatus-row ">
                <div className='d-flex'>
                    <Zap color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Status</span>
                </div>
                <Badge statusImgsData={statusImgsData} />
            </div>
            <hr />
            <div className="showstatus-row ">
                <div className='d-flex'>
                    <User color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Curator</span>
                </div>
                <Avtar imgsrc={statusImgsData.owners} />
            </div>
            <hr />
            <div className="showstatus-row ">
                <div className='d-flex'>
                    <Image color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Contributions</span>
                </div>
                <span>{statusImgsData.total_photos}</span>
            </div>
            <hr />
            <div className="showstatus-row ">
                <div className='d-flex'>
                    <Users color='#d1d1d1' width='18px' />
                    <span className='ps-2'>Top contributors</span>
                </div>
                <div className='d-flex justify-content-end w-50'>
                    <Avtar imgsrc={statusImgsData.top_contributors} />
                </div>
            </div>

        </div>
    )
}
