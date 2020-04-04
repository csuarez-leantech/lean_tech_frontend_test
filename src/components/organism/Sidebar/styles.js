import styled from 'styled-components'
import media from './../../../styles/MediaQueries'
import { Colors } from './../../../utils/Colors'

export const SideBarcontainer = styled.div`
  display:flex;
  width: ${props => props.isOpen ? '330px' : '100px'};
  padding-top:50px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  height: calc(100vh - 154px);
  transition: width 0.3s;
  background-color: ${Colors.PRIMARY_COLOR}
  ${media.largeTablet`
    max-width:330px;
    opacity:${props => props.isOpen ? '1' : '0'};
    width: ${props => props.isOpen ? '100%' : '0px'};
    transition:${`width 0.3s, opacity ${props => props.isOpen ? 0.3 : 0}s`} ;
  `}
  ${media.smallTablet`
    height: calc(100vh - 109px);
    background-color: ${Colors.PRIMARY_COLOR};
    position:fixed;
    max-width:330px;
    opacity:${props => props.isOpen ? '1' : '0'};
    width: ${props => props.isOpen ? '100%' : '0px'};
    transition:${`width 0.3s, opacity ${props => props.isOpen ? 0.3 : 0}s`} ;
  `}
`
