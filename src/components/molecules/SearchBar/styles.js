import React from 'react'
import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase'

const Input = (props) => {
  return (
    <InputBase {...props} />
  )
}

export const SearchbarComponent = styled(Input)`
  width:100%;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.22);
  height:65px;
  svg{
    margin:0 15px;
  }
  input{
    &::placeholder{
      font-size:20px;
      font-style:italic;
      font-family:'Roboto';
      font-weight:300;
      color: #7d7d7d;
    }
  }
`
