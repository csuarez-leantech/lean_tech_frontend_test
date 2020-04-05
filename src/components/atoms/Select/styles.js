import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Chip from '@material-ui/core/Chip'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
// import { Colors } from './../../../utils/Colors'

const SelectMaterialUI = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={props.className}>
      <Chip onDelete={handleClick}
        label={props.value ? '' : props.placeholder}
        deleteIcon={<ArrowDropDown/>}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

SelectMaterialUI.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.array
}

SelectMaterialUI.defaultProps = {
  options: []
}

export const SelectComponent = styled(SelectMaterialUI)`
  .MuiChip-root{
    svg{
      color:#000000;
    }
  }
`
