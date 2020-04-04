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
      <path d='M17.355.62a1.075 1.075 0 00-1.183.184l-1.532 1.38L12.555.287a1.09 1.09 0 00-1.472 0L9 2.183 6.916.286a1.09 1.09 0 00-1.472 0L3.36 2.185 1.825.804A1.083 1.083 0 00.277.896c-.18.207-.279.474-.277.75v20.709a1.108 1.108 0 001.092 1.124c.27.001.533-.1.736-.283l1.532-1.38 2.085 1.898a1.09 1.09 0 001.472 0L9 21.817l2.083 1.896a1.09 1.09 0 001.473 0l2.085-1.898 1.534 1.381c.452.41 1.145.368 1.548-.092.18-.207.279-.474.277-.75V1.645a1.106 1.106 0 00-.645-1.024zM15.37 20.974a1.088 1.088 0 00-1.466.004l-2.085 1.898-2.083-1.896a1.089 1.089 0 00-1.472 0L6.18 22.875l-2.085-1.898a1.083 1.083 0 00-1.462-.004l-1.529 1.38v-2.995L1.1 1.646l1.53 1.38c.42.378 1.05.376 1.467-.004L6.18 1.124l2.083 1.897a1.089 1.089 0 001.472 0l2.083-1.897 2.086 1.898c.415.38 1.045.382 1.462.005l1.529-1.382v14.236l.005 6.473-1.53-1.38z'></path>
      <path d='M14.427 12H3.573c-.317 0-.573.224-.573.5s.256.5.573.5h10.854c.317 0 .573-.224.573-.5s-.256-.5-.573-.5zM9.498 8H4.502C4.225 8 4 8.224 4 8.5s.225.5.502.5h4.996c.277 0 .502-.224.502-.5S9.775 8 9.498 8zm4.929 7H3.573c-.317 0-.573.224-.573.5s.256.5.573.5h10.854c.317 0 .573-.224.573-.5s-.256-.5-.573-.5z'></path>
    </svg>
  )
}

Icon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon