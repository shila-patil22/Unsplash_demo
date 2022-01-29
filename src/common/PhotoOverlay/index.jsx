
export const PhotoOverlay = ({ username, userProfile }) => {
    return <div>
        <div className="like-btn-wrapper">
            <div className="d-flex flex-column">
                <div className="overlay"></div>
                <div className="d-flex justify-content-end">
                    <button><svg width="24" height="24" fill="#767676" className="TrVF8" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg></button>
                    <button><svg width="24" height="24" fill="#767676" className="utUL6" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg></button>
                </div>
                <div className="user-detail">
                    <div className='d-flex'>
                        <div><img className='rounded-circle me-3' src={userProfile} alt="" /></div>
                        <div>{username}</div>
                    </div>
                    <div>
                        <button><svg width="24" height="24" fill="#767676" className="c_c7b" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg></button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
