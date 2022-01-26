import React, { useEffect, useState } from 'react'
import { useLazyGetUnsplashnByNameQuery } from '../../Redux/reduxApiCalling'
import { Modal, ModalBody } from 'reactstrap'
import moment from 'moment'
import { TailSpin } from 'react-loader-spinner'
import { Calendar, Camera, CheckSquare, MapPin } from 'react-feather'
import { CollectionImgs } from '../CollectionImgs'
import './style.css'

export const PhotoGallery = ({ imgurls, imgId }) => {
    const [getImgDetail, { data: photoDetail, isLoading: isPhotoDetail }] = useLazyGetUnsplashnByNameQuery();
    const [getCollection, { data: relatedCollection, isLoading: isRelatedCollection }] = useLazyGetUnsplashnByNameQuery();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggle = () => {
        setModalIsOpen(!modalIsOpen)
    };

    useEffect(() => {
        modalIsOpen && getImgDetail({ params: `photos/${imgId}` })
        modalIsOpen && getCollection({ params: `photos/${imgId}/related` })
    }, [modalIsOpen])
    return (
        <>
            <div className='topic-photos-wrapper img-fluid pb-3 ' color="danger"
                onClick={toggle}>
                <img src={imgurls} className='w-100' alt='' />
                <div className="like-btn-wrapper">
                    <button><svg width="24" height="24" class="TrVF8" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg></button>
                    <button><svg width="24" height="24" class="utUL6" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M14 3h4v26h-4zM29 14v4h-26v-4z"></path></svg></button>
                </div>
            </div>

            {photoDetail && <Modal
                isOpen={modalIsOpen}
                toggle={toggle}
            >
                <div className='d-flex p-4 align-items-center'>
                    <div>
                        <img className='rounded-circle' src={photoDetail?.user?.profile_image.small} alt="" />
                    </div>
                    <div className='d-flex flex-column ps-2'>
                        <div className='fw-bold'>{photoDetail?.user?.first_name}</div>
                        <small className='fw-lighter'>@{photoDetail?.user?.username}</small>
                    </div>

                </div>
                <ModalBody>
                    <img src={photoDetail?.urls?.small} className='w-100' alt='' />
                </ModalBody>
                <div className="d-flex  w-50">
                    {photoDetail?.views && <div className='d-flex flex-column mx-4'><div style={{ color: '#767676' }}>View:</div> {photoDetail?.views}</div>}
                    {photoDetail?.downloads && <div className='d-flex flex-column mx-4'><div style={{ color: '#767676' }}>Downloads:</div> {photoDetail?.downloads}</div>}
                </div>
                {photoDetail?.location?.title && <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><MapPin color='#767676' size='18px' className='me-2' /></div>{photoDetail?.location?.title}</div>}
                {photoDetail?.created_at && <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><Calendar color='#767676' size='18px' className='me-2' /></div>Published on {moment(photoDetail?.created_at).format("MMMM DD YYYY")}</div>}
                {photoDetail?.exif?.model && <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 0 0' }}><div><Camera color='#767676' size='18px' className='me-2' /></div>{photoDetail?.exif?.make}{" "}{photoDetail?.exif?.model}</div>}
                <div className='d-flex mx-4' style={{ color: '#767676', margin: '12px 0 50px 0' }}><div><CheckSquare color='#767676' size='18px' className='me-2' /></div>Free to use under the Unsplash License
                </div>
                <div className="photo-gallery">
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
                <>
                    <h3 className="text-center my-2">Related collections</h3>
                    <div className="collection-photo-gallery ">
                        {
                            !isPhotoDetail ? photoDetail?.related_collections?.results?.map((photos, i) => {
                                return (
                                    <CollectionImgs key={i} collectionData={photos} />
                                )
                            }) : <TailSpin
                                heigth="100"
                                width="100"
                                color='grey'
                                arialLabel='loading'
                            />
                        }
                    </div>
                </>

            </Modal>}
        </>
    )
}
