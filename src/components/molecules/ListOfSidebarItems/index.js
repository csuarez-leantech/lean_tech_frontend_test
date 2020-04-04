import React from 'react'
import PropTypes from 'prop-types'
import { ListOfSidebarItemsContainer } from './styles'

import { SidebarItem } from './../SidebarItem'
import { Conditional } from './../../atoms/Conditional'
import { Routes } from './../../../utils/Routes'

export const ListOfSidebarItems = (props) => {
  return (
    <Conditional condition={Routes.length !== 0}>
      <ListOfSidebarItemsContainer>
        {Object.keys(Routes).map((item, i) => {
          return (
            <SidebarItem key={i} label={Routes[item].label} path={Routes[item].path} iconName={Routes[item].icon} isOpen={props.isOpen}/>
          )
        })}
      </ListOfSidebarItemsContainer>
    </Conditional>
  )
}

ListOfSidebarItems.propTypes = {
  isOpen: PropTypes.bool
}
