import React from 'react'

import { ToolbarContainer } from './styles'

import { IconButton } from './../../molecules/IconButton'
import { Image } from './../../atoms/Image'
export const Toolbar = () => {
  return (
    <ToolbarContainer>
      <IconButton
        iconName='MENU'
        iconWidth={30}
        iconColor='PRIMARY_COLOR'
        buttonStyle={{
          padding: '0 40px'
        }}/>
      <Image imageName='LEAN_TECH_LOGO' style={{ width: 220 }}/>
      <p>Lean Text</p>
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
