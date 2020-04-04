import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { SideBarcontainer } from './styles'

import { ListOfSidebarItems } from './../../molecules/ListOfSidebarItems'

export const Sidebar = (props) => {
  const refSidebar = React.createRef()

  useEffect(() => {
    if (refSidebar.current) {
      props.setSidebarWidth(refSidebar.current.getBoundingClientRect().width)
    }
    // eslint-disable-next-line
  }, [refSidebar])

  return (
    <SideBarcontainer ref={refSidebar} {...props}>
      <ListOfSidebarItems isOpen={props.isOpen}/>
    </SideBarcontainer>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setSidebarWidth: PropTypes.func
}
