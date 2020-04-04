import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width}
      height={props.height || '100%'}
      viewBox='0 0 18 24'
    >
      <path d='M17.854 5.146l-5-5A.504.504 0 0012.5 0H2C.897 0 0 .897 0 2v20c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.5a.504.504 0 00-.146-.354zM13 1.707L16.293 5H14c-.552 0-1-.449-1-1V1.707zM17 22c0 .551-.448 1-1 1H2c-.552 0-1-.449-1-1V2c0-.551.448-1 1-1h10v3c0 1.103.897 2 2 2h3v16z'></path>
      <path d='M14.5 14h-11a.5.5 0 000 1h11a.5.5 0 000-1zm0-3h-11a.5.5 0 000 1h11a.5.5 0 000-1zm0 6h-11a.5.5 0 000 1h11a.5.5 0 000-1zm-5 3h-6a.5.5 0 000 1h6a.5.5 0 000-1zM8 8.5a.5.5 0 00.5.5h6a.5.5 0 000-1h-6a.5.5 0 00-.5.5zm-3.5-1h-1a.5.5 0 000 1H4a.5.5 0 001 0v-.092A1.5 1.5 0 006 7c0-.827-.673-1.5-1.5-1.5a.5.5 0 010-1h1a.5.5 0 000-1H5a.5.5 0 00-1 0v.092A1.5 1.5 0 003 5c0 .827.673 1.5 1.5 1.5a.5.5 0 010 1z'></path>
    </svg>
  )
}

Icon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon
