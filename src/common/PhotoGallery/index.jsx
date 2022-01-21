import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Calendar, Camera, CheckSquare, MapPin } from 'react-feather'
import { TailSpin } from 'react-loader-spinner'
import { Modal, ModalBody } from 'reactstrap'
import { useLazyGetUnsplashPhotoDetailsQuery, useLazyGetUnsplashRelatedCollectionQuery, } from '../../Redux/reduxApiCalling'
import './style.css'

export const PhotoGallery = ({ imgurls, imgId }) => {
    const [getImgDetail, { data: photoDetail, isLoading: isPhotoDetail }] = useLazyGetUnsplashPhotoDetailsQuery();
    const [getCollection, { data: relatedCollection, isLoading: isRelatedCollection }] = useLazyGetUnsplashRelatedCollectionQuery();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggle = () => {
        setModalIsOpen(!modalIsOpen)
    };
    useEffect(() => {
        modalIsOpen && getImgDetail(imgId)
        modalIsOpen && getCollection(imgId)

    }, [modalIsOpen])
    return (
        <>
            <div className='topic_photos_wrapper img-fluid pb-3 ' color="danger"
                onClick={toggle}>
                <img src={imgurls} className='w-100' alt='' />
            </div>

            <Modal
                isOpen={modalIsOpen}
                toggle={toggle}
            >
                <ModalBody>
                    <img src={imgurls} className='w-100' alt='' />
                </ModalBody>
                <div className=" d-flex  w-50">
                    {photoDetail?.views && <div className='d-flex flex-column mx-4'><div style={{ color: '#767676' }}>View:</div> {photoDetail?.views}</div>}
                    {photoDetail?.downloads && <div className='d-flex flex-column mx-4'><div style={{ color: '#767676' }}>Downloads:</div> {photoDetail?.downloads}</div>}
                </div>
                {photoDetail?.location?.title && <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><MapPin color='#767676' size='18px' className='me-2' /></div>{photoDetail?.location?.title}</div>}
                {photoDetail?.created_at && <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><Calendar color='#767676' size='18px' className='me-2' /></div>Published on {moment(photoDetail?.created_at).format("MMMM DD YYYY")}</div>}
                <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><Camera color='#767676' size='18px' className='me-2' /></div>{photoDetail?.exif?.make}{" "}{photoDetail?.exif?.model}</div>
                <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 50px 0' }}><div><CheckSquare color='#767676' size='18px' className='me-2' /></div>Free to use under the Unsplash License
                </div>
                <div className="photo_gallery">
                    {
                        !isRelatedCollection ? relatedCollection?.results?.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos?.urls?.regular} imgId={photos?.id} />
                            )
                        }) : <TailSpin
                            heigth="100"
                            width="100"
                            color='grey'
                            arialLabel='loading'
                        />
                    }
                </div>

            </Modal>
        </>
    )
}
