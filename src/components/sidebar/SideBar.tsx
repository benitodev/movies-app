import React from 'react'
import {
  MdOutlineVideoLabel as LogoIcon
} from 'react-icons/md'

import Nav from './Nav'
import styles from './SideBar.module.css'
const SideBar = () => {
  return (
    <header className={styles.header}>
      <LogoIcon color="#ff3737d1" size={40} />
      <Nav/>
    </header>
  )
}

export default SideBar
