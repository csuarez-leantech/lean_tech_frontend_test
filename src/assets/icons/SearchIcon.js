import React from 'react'
import PropTypes from 'prop-types'

const Icon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height || '100%'}
      viewBox="0 0 25 25"
    >
      <path
        fill="#7D7D7D"
        d="M24.847 24.11l-7.606-7.606a9.842 9.842 0 002.55-6.608C19.792 4.439 15.353 0 9.897 0 4.439 0 0 4.44 0 9.896s4.44 9.896 9.896 9.896a9.843 9.843 0 006.608-2.551l7.607 7.606a.519.519 0 00.736 0 .52.52 0 000-.736zM9.896 18.75c-4.882 0-8.854-3.972-8.854-8.854s3.972-8.854 8.854-8.854 8.854 3.972 8.854 8.854-3.972 8.854-8.854 8.854z"
      ></path>
    </svg>
  )
}

Icon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon
