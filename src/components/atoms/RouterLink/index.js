import React from 'react'
import PropTypes from 'prop-types'

import { RouterLinkComponent } from './styles'

export const RouterLink = (props) => {
  return (
    <RouterLinkComponent to={props.path}>
      {props.children}
    </RouterLinkComponent>
  )
}

RouterLink.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string
}
