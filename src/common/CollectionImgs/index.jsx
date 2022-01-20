import { useHistory } from 'react-router-dom'
import './style.css'

export const CollectionImgs = ({ collectionData }) => {
    const history = useHistory()
    return (
        <div className='photos_collection_wrapper'>
            <div className='photos_wrapper pb-3' onClick={() => history.push(`/collections/${collectionData.id}`)}>
                {
                    collectionData?.preview_photos?.slice(0, 3)?.map((img, id) => <img className={`index-${id}`} key={id} src={img?.urls?.regular} alt='' />)
                }
            </div>
            <div className='d-flex flex-column'>
                <p className='fw-bold fs-4'>{collectionData.title}</p>
                <p style={{ color: '#767676' }}>{collectionData.total_photos}{" "}photos{"."}Curated by {collectionData?.user?.first_name}</p>
            </div>
        </div>
    )
}
