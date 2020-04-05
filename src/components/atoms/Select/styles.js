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

  const handleSelectedItem = (value) => {
    props.onSelect(value)
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={props.className} style={props.style}>
      <Chip onDelete={handleClick}
        onClick={handleClick}
        label={props.selectedValue ? props.selectedValue : props.placeholder}
        deleteIcon={<ArrowDropDown/>}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.options.map((item, i) => {
          return (
            <MenuItem key={i} onClick={() => handleSelectedItem(item)}>{item}</MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

SelectMaterialUI.propTypes = {
  selectedValue: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  options: PropTypes.array,
  onSelect: PropTypes.func
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
