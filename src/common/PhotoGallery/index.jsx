import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useLazyGetUnsplashRecordQuery } from '../../Redux/unsplashApi'
import { Modal, ModalBody } from 'reactstrap'
import { TailSpin } from 'react-loader-spinner'
import { Calendar, Camera, CheckSquare, MapPin } from 'react-feather'
import { CollectionImgs } from '../CollectionImgs'
import { PhotoOverlay } from '../PhotoOverlay'
import './style.css'

export const PhotoGallery = ({ imgurls, imgId, username, userProfile }) => {
    const [getImgDetail, { data: photoDetail, isLoading: isPhotoDetail }] = useLazyGetUnsplashRecordQuery();
    const [getCollection, { data: relatedCollection, isLoading: isRelatedCollection }] = useLazyGetUnsplashRecordQuery();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggle = () => {
        setModalIsOpen(!modalIsOpen)
    };
    useEffect(() => {
        modalIsOpen && getImgDetail({ entity: `photos/${imgId}` })
        modalIsOpen && getCollection({ entity: `photos/${imgId}/related` })
    }, [modalIsOpen])
    return (
        <>
            <div className='topic-photos-wrapper img-fluid mb-3' color="danger"
                onClick={toggle}>
                <img src={imgurls} className='w-100' alt='' />
                <PhotoOverlay username={username} userProfile={userProfile} />
            </div>

            {photoDetail && <Modal
                isOpen={modalIsOpen}
                toggle={toggle}
            >
                <div className='d-flex p-4 align-items-center'>
                    <div>
                        <img className='rounded-circle' src={photoDetail?.user?.profile_image?.small} alt="" />
                    </div>
                    <div className='d-flex flex-column ps-2'>
                        <div className='fw-bold'>{photoDetail?.user?.first_name}</div>
                        <small className='fw-lighter'>@{photoDetail?.user?.username}</small>
                    </div>

                </div>
                <ModalBody>
                    <img src={photoDetail?.urls?.small} className='w-100' alt='' />
                </ModalBody>
                <div className="d-flex w-50">
                    {photoDetail?.views && <div className='d-flex flex-column mx-4'><div>View:</div> {photoDetail?.views}</div>}
                    {photoDetail?.downloads && <div className='d-flex flex-column mx-4'><div>Downloads:</div> {photoDetail?.downloads}</div>}
                    {photoDetail?.topics.length > 0 && <div className='d-flex flex-column mx-4'><div>Featured in:
                    </div>
                        {photoDetail?.topics?.map((data, id) => {
                            return (
                                data.title
                            )
                        })}</div>}
                </div>
                <div className="d-flex">
                    <div>
                        {photoDetail?.location?.title && <div className='photo-detail'><div><MapPin color='#767676' size='18px' className='me-2' /></div>{photoDetail?.location?.title}</div>}
                        {photoDetail?.created_at && <div className='photo-detail'><div><Calendar color='#767676' size='18px' className='me-2' /></div>Published on {moment(photoDetail?.created_at).format("MMMM DD YYYY")}</div>}
                        {photoDetail?.exif?.model && <div className='photo-detail'><div><Camera color='#767676' size='18px' className='me-2' /></div>{photoDetail?.exif?.make}{" "}{photoDetail?.exif?.model}</div>}
                        <div className='photo-detail'><div><CheckSquare color='#767676' size='18px' className='me-2' /></div>Free to use under the Unsplash License
                        </div>
                        {photoDetail?.location?.title && <div className='photo-detail'><div><MapPin color='#767676' size='18px' className='me-2' /></div>{photoDetail?.location?.title}</div>}

                    </div>
                    <div className='photo-detail'>{photoDetail?.description}</div>
                </div>
                <div className="photo-gallery">
                    {
                        !isRelatedCollection ? relatedCollection?.results?.map((photos, i) => {
                            return (
                                <PhotoGallery key={i} imgurls={photos?.urls?.regular} imgId={photos?.id} username={photos?.user?.first_name} userProfile={photos?.user?.profile_image?.small} />
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
