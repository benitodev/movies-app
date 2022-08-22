import React, { useRef } from 'react'
import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight
} from 'react-icons/bs'

import styles from './Trending.module.css'

type Props = {
    children: React.ReactNode[]
}

const Trending = ({ children }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null)

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
  return (
    <div className={styles.wrapper}>
        <button onClick={handleClick} className={styles.buttonLeft} id='arrowLeft'>
        <ArrowLeft className={styles.left} />
        </button>
        <div ref={carouselRef} className={styles.carousel} >
            {children}
        </div>
        <button onClick={handleClick} className={styles.buttonRight} id='arrowRight'>
        <ArrowRight className={styles.right} />
        </button>
  </div>
  )
}

export default Trending
