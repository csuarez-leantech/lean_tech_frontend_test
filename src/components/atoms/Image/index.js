import React from 'react'
import PropTypes from 'prop-types'
import { Images } from './../../../assets/export'
import { ImageComponent } from './styles'

export const Image = (props) => {
  return (
    <ImageComponent src={props.imageName ? Images[props.imageName] : null} {...props} draggable={false} />
  )
}

Image.propTypes = {
  imageName: PropTypes.string
}
