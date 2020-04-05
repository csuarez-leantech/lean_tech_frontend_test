import React from 'react'
import PropTypes from 'prop-types'

import { ToolbarContainer } from './styles'

import { IconButton } from './../../molecules/IconButton'
import { Image } from './../../atoms/Image'
import { Text } from './../../atoms/Text'

export const Toolbar = (props) => {
  return (
    <ToolbarContainer >
      <IconButton
        onClick={props.handleSidebar}
        iconName={props.isOpen ? 'MENU_CLOSE' : 'MENU'}
        iconWidth={30}
        iconColor='PRIMARY_COLOR'
        buttonStyle={{
          margin: props.isOpen ? '0 2.5px' : 0
        }}
      />
      <Image imageName='LEAN_TECH_LOGO' style={{ width: 45 }}/>
      <Text style={{ fontFamily: 'Viga', fontSize: 33 }}>LeanTech</Text>
      <IconButton
        iconName='OPTIONS'
        iconWidth={30}
        iconColor='PRIMARY_COLOR'
        buttonStyle={{
          paddingRight: 30,
          marginLeft: 'auto'
        }}/>
    </ToolbarContainer>
  )
}

Toolbar.propTypes = {
  handleSidebar: PropTypes.func,
  isOpen: PropTypes.bool
}
