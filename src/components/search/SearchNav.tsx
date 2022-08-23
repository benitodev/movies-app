import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { change } from '../../slices/search'
import styles from './SearchNav.module.css'

const SearchNav = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleChange = () => {
    if (searchRef && searchRef.current) {
      // action to change filter value
      const newValue = searchRef.current.value
      dispatch(change({ newValue }))
    }
  }

  return (
    <div className={styles.container}>
      <BsSearch color="#fff" size={20} />
      <input
        ref={searchRef}
        onChange={handleChange}
        type="text"
        className={styles.input}
        placeholder="Search for movies or series"
      />
    </div>
  )
}

export default SearchNav
