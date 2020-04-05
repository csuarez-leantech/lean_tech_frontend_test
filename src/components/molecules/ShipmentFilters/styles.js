import styled from 'styled-components'
import { Colors } from './../../../utils/Colors'

export const ShipmentFilterContainer = styled.div`
  display:flex;
`

export const ShipmentFilterInputSection = styled.div`
  display:flex;
  width:50%;
`

export const ShipmentFilterSelectSection = styled.div`
  display:flex;
  width:50%;
  justify-content:space-between;
  button{
    height:60px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius:30px;
    padding:0 25px;
    svg{
      margin-right:10px;
    }
    p{
      font-size:20px;
      font-weight: 500;
      color:${Colors.PRIMARY_COLOR}
    }
  }
`

export const ShipmentFilterSelectsContainer = styled.div`
  display:flex;
  padding-left:30px;
  >div{
    margin:auto 8px;
  }
`
