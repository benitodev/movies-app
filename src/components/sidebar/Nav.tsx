import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  MdLocalMovies as MoviesIcon,
  MdOutlineOndemandVideo as SeriesIcon
} from 'react-icons/md'
import { RiVideoLine as HomeIcon, RiSave2Line as SavedIcon } from 'react-icons/ri'

const Nav = () => {
  return (
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
          <HomeIcon size={30} />{' '}
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
          <MoviesIcon size={30} />{' '}
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
          <SeriesIcon size={30} />{' '}
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
          <SavedIcon size={30} />{' '}
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Nav
