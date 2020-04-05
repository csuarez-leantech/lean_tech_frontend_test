import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

const TooltipMaterialUI = (props) => {
  return (
    <Tooltip title={props.title} open={props.open}>
      {props.children}
    </Tooltip>)
}
TooltipMaterialUI.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node
}

export const TooltipComponent = styled(TooltipMaterialUI)`


`
