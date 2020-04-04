import styled, { css } from 'styled-components'
import { Colors } from './../../../utils/Colors'
const SidebarItemOpenStyles = (props) => css`
  height:57px;
  margin:15px 0;
  width:calc(100% - 30px);
  border-radius: 0 30px 30px 0;
  display: flex;
  align-items:center;
  svg{
    margin-left:40px;
    margin-right:20px;
    min-width:20px;
  }
  p{
    opacity:1;
    font-weight:300;
    font-size:24px;
    width:200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 1s;
  }
`

const SidebarItemClosedStyles = (props) => css`
  height:57px;
  width:57px;
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  margin:15px 25px;
  p{
    position:absolute;
    opacity:0;
    width:0;
  }
`

export const SidebarItemContainer = styled.div`
  display:flex;background-color: ${props => props.isSelected ? Colors.SECONDARY_COLOR : Colors.PRIMARY_COLOR};
  transition: background-color 0.4s, width 0.5s;
  ${props => props.isOpen
    ? SidebarItemOpenStyles(props)
    : SidebarItemClosedStyles(props)
  }
`
