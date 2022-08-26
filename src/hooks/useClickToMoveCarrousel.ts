import React from 'react'
const useClickToMoveCarrousel = (carouselRef : React.RefObject<HTMLDivElement>) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement
    if (target.id === 'arrowLeft') {
      // @ts-ignore
      carouselRef.current.scrollLeft -= 480
    } else if (target.id === 'arrowRight') {
      // @ts-ignore
      carouselRef.current.scrollLeft += 480
    }
  }
  return handleClick
}

export default useClickToMoveCarrousel
