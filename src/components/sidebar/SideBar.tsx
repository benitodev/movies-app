import React from 'react'
import {
  MdLocalMovies as Movies,
  MdOutlineOndemandVideo as Series,
  MdOutlineVideoLabel as Logo
} from 'react-icons/md'
import { RiVideoLine as Home, RiSave2Line as Save } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
const SideBar = () => {
  return (
    <header className={styles.header}>
      <Logo color="#ff3737d1" size={40} />
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#91929f'
              })}
              to="/home"
            >
              {' '}
              <Home size={30} />{' '}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#91929f'
              })}
              to="/movies"
            >
              {' '}
              <Movies size={30} />{' '}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#91929f'
              })}
              to="/series"
            >
              {' '}
              <Series size={30} />{' '}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#91929f'
              })}
              to="/saved"
            >
              {' '}
              <Save size={30} />{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default SideBar
