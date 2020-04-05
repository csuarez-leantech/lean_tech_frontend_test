import React from 'react'
import PropTypes from 'prop-types'
import { SearchbarComponent } from './styles'
import { Icon } from './../../atoms/Icon'

export const SearchBar = (props) => {
  return (
    <SearchbarComponent
      placeholder={props.placeholder}
      startAdornment={<Icon iconName='SEARCH_ICON' width={25} />}
    />
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
