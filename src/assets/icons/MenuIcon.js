import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from './../../utils/Colors'

const MenuIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height || '100%'}
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' fill={props.color ? Colors[props.color] : 'none'}></path>
    </svg>
  )
}

MenuIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default MenuIcon
