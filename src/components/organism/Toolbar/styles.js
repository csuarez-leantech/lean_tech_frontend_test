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
      color:#ffffff;
      font-size:20px;
      margin-left:20px;
      line-height:1.5;
      text-transform:uppercase;
    }
  button{
    &:first-child{
        padding:0 40px;
      }
    &:last-child{
      display:none;
    }
  }
  ${media.phone`
    height:64px;
    img{
      width:35px!important;
    }
    button{
      &:first-child{
        padding:0 24px;
        padding-right:15px;
      }
      &:last-child{
        display:block;
      }
    }
    p{
      font-size:20px!important;
    }
  `}
  
`
