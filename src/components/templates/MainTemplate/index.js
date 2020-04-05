import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { MainContainer, MainContent } from './styles'

import { Toolbar } from './../../organism/Toolbar'
import { Sidebar } from './../../organism/Sidebar'
import { ShipmentList } from './../../../pages/ShipmentList'

import { Routes } from './../../../utils/Routes'

export const MainTemplate = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState()
  const [sidebarWidth, setSidebarWidth] = useState(0)

  return (
    <>
      <Toolbar handleSidebar= {() => setIsSidebarOpen(!isSideBarOpen)} isOpen={isSideBarOpen}/>
      <MainContainer>
        <Sidebar setSidebarWidth={setSidebarWidth} isOpen={isSideBarOpen}/>
        <MainContent sidebarWidth={sidebarWidth}>
          <Switch>
            <Route exact path={Routes.shipment.path} component={ShipmentList}/>
          </Switch>
        </MainContent>
      </MainContainer>
    </>
  )
}
