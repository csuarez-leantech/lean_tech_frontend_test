import React from 'react'

import { MainContainer, MainContent, SideBarcontainer } from './styles'

import { Toolbar } from './../../organism/Toolbar'

export const MainTemplate = () => {
  return (
    <div>
      <Toolbar/>
      <MainContainer>
        <SideBarcontainer style={{
          width: 330,
          boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.12)',
          height: 'calc(100vh - 104px)'
        }}>
          Sidebar
        </SideBarcontainer>
        <MainContent>
          Content
        </MainContent>
      </MainContainer>
    </div>
  )
}
