import React, { ReactElement, useEffect, useState } from 'react'
import { MdLocalMovies, MdOutlineOndemandVideo } from 'react-icons/md'
import { Video } from '../types'
const useFilterIcons = (video: Video) => {
  const [icon, setIcon] = useState<ReactElement>()

  useEffect(() => {
    if (video.category === 'Movie') {
      setIcon(<MdLocalMovies />)
    } else if (video.category === 'TV Series') {
      setIcon(<MdOutlineOndemandVideo />)
    }
  }, [video])

  return icon
}

export default useFilterIcons
