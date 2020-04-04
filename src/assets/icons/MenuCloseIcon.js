import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height || '100%'}
      fill='#fff'
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0V0z'></path>
      <path d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z'></path>
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon
