import React from 'react'
import PropTypes from 'prop-types'
import { ButtonComponent } from './styles'

export const Button = (props) => {
  return (
    <ButtonComponent {...props}>
      {props.children}
    </ButtonComponent>
  )
}

Button.propTypes = {
  children: PropTypes.node
}
