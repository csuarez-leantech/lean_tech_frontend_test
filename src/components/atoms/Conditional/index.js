import React from 'react'
import PropTypes from 'prop-types'

export const Conditional = (props) => {
  if (props.condition) {
    return (
      <>
        {props.children}
      </>
    )
  }

  return <></>
}

Conditional.propTypes = {
  condition: PropTypes.bool,
  children: PropTypes.node
}
