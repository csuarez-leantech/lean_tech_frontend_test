import styled from 'styled-components'
import { Colors } from './../../../utils/Colors'

export const ButtonComponent = styled.button`
  outline:none;
  border:none;
  cursor:pointer;
  background-color: ${Colors.ACCENT_COLOR};
  ${props => props.style}
`
