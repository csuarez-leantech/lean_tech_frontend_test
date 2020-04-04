import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './../../atoms/Button'
import { Icon } from './../../atoms/Icon'

export const IconButton = (props) => {
  return (
    <Button style={props.buttonStyle}>
      <Icon iconName={props.iconName} width={props.iconWidth} height={props.iconHeight} color={props.iconColor}/>
    </Button>
  )
}

IconButton.propTypes = {
  iconName: PropTypes.string,
  buttonStyle: PropTypes.object,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
  iconColor: PropTypes.string
}
