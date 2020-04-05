import React from 'react'
import PropTypes from 'prop-types'
import { SidebarItemContainer } from './styles'
import { withRouter } from 'react-router-dom'

import { RouterLink } from './../../atoms/RouterLink'
import { Icon } from './../../atoms/Icon'
import { Text } from './../../atoms/Text'

const SidebarItemComponent = (props) => {
  return (
    <RouterLink path={props.path}>
      <SidebarItemContainer isOpen={props.isOpen} isSelected={(props.location.pathname === props.path) }>
        <Icon width={20} height={20} iconName={props.iconName}/>
        <Text>{props.label}</Text>
      </SidebarItemContainer>
    </RouterLink>
  )
}

export const SidebarItem = withRouter(SidebarItemComponent)

SidebarItemComponent.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  iconName: PropTypes.string,
  isOpen: PropTypes.bool,
  location: PropTypes.object
}
