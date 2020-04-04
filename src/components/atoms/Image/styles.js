import styled from 'styled-components'

export const ImageComponent = styled.img`
  user-select:none;
  height:auto;
  ${props => props.style}
`
