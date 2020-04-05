import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { SearchbarComponent } from './styles'
import { Icon } from './../../atoms/Icon'
import { Tooltip } from './../../atoms/Tooltip'
import { Patterns } from './../../../utils/Patterns'
import { isEmpty } from './../../../tools/dataValidator'

export const SearchBar = (props) => {
  const [error, setError] = useState({ isInvalid: false, message: '' })

  useEffect(() => {
    // eslint-disable-next-line
    setError(isInputValid(props.value))
  }, [props.value])

  // Checks if the inputs has a valid value
  const isInputValid = () => {
    const pattern = props.validationPattern ? new RegExp(Patterns[props.validationPattern].pattern) : new RegExp('')
    if (!pattern.test(props.value) && !isEmpty(props.value)) {
      return {
        isInvalid: true,
        message: Patterns[props.validationPattern].message
      }
    } else {
      return {
        isInvalid: false,
        message: ''
      }
    }
  }

  return (
    <Tooltip title={error.message} open={error.isInvalid} type='error'>
      <SearchbarComponent
        {...props}
        startAdornment={<Icon iconName='SEARCH_ICON' width={25} />}
      />
    </Tooltip>

  )
}

SearchBar.propTypes = {
  validationPattern: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}
