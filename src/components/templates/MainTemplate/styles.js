import styled from 'styled-components'
import media from './../../../styles/MediaQueries'

export const MainContainer = styled.div`
  display:flex;
  padding-top:104px;
  ${media.phone`
    padding-top:64px;
  `}
`

export const MainContent = styled.div`
  width: ${props => `calc(100% - ${props.sidebarWidth}px)`};
`
