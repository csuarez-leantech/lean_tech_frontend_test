import React from 'react'
import PropTypes from 'prop-types'
import { Icons } from './../../../assets/export'

export const Icon = (props) => {
  // Parse the receive Icon related to the props.iconName into a Component
  const SelectedIcon = () => { return Icons[props.iconName](props) }
  return (
    <>
      <SelectedIcon {...props}/>
    </>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string
}
