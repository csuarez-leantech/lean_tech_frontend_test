import styled from 'styled-components'
import { Colors } from './../../../utils/Colors'
import media from './../../../styles/MediaQueries'

export const ToolbarContainer = styled.header`
  width:100%;
  height:104px;
  display:flex;
  align-items:center;
  position:fixed;
  background-color: ${Colors.ACCENT_COLOR};
  p{
    display:none;
  }
  button{
    
    &:last-child{
      display:none;
    }
  }
  ${media.phone`
    height:64px;
    p{
      display:block;
      color:#ffffff;
      font-size:20px;
      font-weight:600;
      margin:0;
      line-height:1.5;
    }
    img{
      display:none;
    }
    button{
      &:first-child{
        padding:0 24px!important;
      }
      &:last-child{
        display:block;
      }
    }
  `}
  
`
