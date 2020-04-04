import React from 'react'
import { CircularProgressComponent, LoadingContainer } from './styles'

export const Loading = (props) => {
  return (
    <LoadingContainer >
      <CircularProgressComponent/>
    </LoadingContainer>
  )
}
