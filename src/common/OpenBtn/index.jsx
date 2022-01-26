import './style.css'

export const OpenBtn = ({ statusImgsData }) => {

    const status = statusImgsData.status === 'closed'
    return (
        <div className={`open-btn ${status ? 'red' : ''}`}>
            <div className='circle'></div>
            {statusImgsData.status}
        </div>
    )
}
