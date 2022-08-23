import React from 'react'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addVideo, removeVideo } from '../../slices/saved'

// eslint-disable-next-line no-undef
const SavedButton = ({ styles, id, isSaved } : {styles: CSSModuleClasses, id: string, isSaved: boolean }) => {
  const dispatch = useDispatch()

  const toggleSaved: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!isSaved) {
      dispatch(addVideo({ newVideo: id }))
    } else if (isSaved) {
      dispatch(removeVideo({ videoToRemove: id }))
    }
  }

  return (
    <div className={styles.svgContainer}>
        <button style={{ backgroundColor: 'transparent', padding: '0' }} onClick={toggleSaved}>
          {isSaved ? <BsBookmarkHeartFill color='white'/> : <BsBookmarkHeart color='white'/>}
        </button>
        </div>
  )
}

export default SavedButton
