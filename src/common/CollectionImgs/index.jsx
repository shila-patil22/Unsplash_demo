import { useHistory } from 'react-router-dom'
import './style.css'

export const CollectionImgs = ({ collectionData }) => {
    const history = useHistory()
    return (
        <div className='photos-collection-wrapper'>
            <div className='photos-wrapper pb-2' onClick={() => history.push(`/collections/${collectionData.id}`, { state: collectionData.title })}>
                {
                    collectionData?.preview_photos?.slice(0, 3)?.map((img, id) => <img className={`index-${id}`} key={id} src={img?.urls?.regular} alt='' />)
                }
            </div>
            <div className='collection-title'>
                <p className='fw-bold fs-4'>{collectionData.title}</p>
                <p>{collectionData.total_photos}{" "}photos{"."}Curated by {collectionData?.user?.first_name}</p>
                <div className='collection-tag-wrapper'>

                    {collectionData?.tags?.slice(0, 3)?.map((data) => {
                        return (
                            <div className="collection-tag">{data.title}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
