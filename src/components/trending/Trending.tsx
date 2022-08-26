import React, { useRef } from 'react'
import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight
} from 'react-icons/bs'
import useClickToMoveCarrousel from '../../hooks/useClickToMoveCarrousel'

import styles from './Trending.module.css'

export interface Props {
  children: React.ReactNode[];
};

const Trending = ({ children }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const carrouselHandleClick = useClickToMoveCarrousel(carouselRef)

  return (
    <div className={styles.wrapper}>
      <button
        onClick={carrouselHandleClick}
        className={styles.buttonLeft}
        id="arrowLeft"
      >
        <ArrowLeft className={styles.left} />
      </button>
      <div ref={carouselRef} className={styles.carousel}>
        {children}
      </div>
      <button
        onClick={carrouselHandleClick}
        className={styles.buttonRight}
        id="arrowRight"
      >
        <ArrowRight className={styles.right} />
      </button>
    </div>
  )
}

export default Trending
