import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from './../../utils/Colors'

const Icon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height || '100%'}
      fill={props.color ? Colors[props.color] : 'none'}
      viewBox='0 0 24 24'
    >
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon
