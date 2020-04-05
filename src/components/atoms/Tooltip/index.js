import React from 'react'
import PropTypes from 'prop-types'
import { TooltipComponent } from './styles'

export const Tooltip = (props) => {
  return (
    <TooltipComponent {...props} >
      {props.children}
    </TooltipComponent>
  )
}

Tooltip.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string
}
