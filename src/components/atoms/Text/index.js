import React from 'react'
import PropTypes from 'prop-types'
import { TextComponent } from './styles'

export const Text = (props) => {
  return (
    <TextComponent {...props}>
      {props.children}
    </TextComponent>
  )
}

Text.propTypes = {
  children: PropTypes.node
}
