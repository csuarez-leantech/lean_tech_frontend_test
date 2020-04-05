import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  ShipmentFilterContainer,
  ShipmentFilterInputSection,
  ShipmentFilterSelectSection,
  ShipmentFilterSelectsContainer
} from './styles'
import { SearchBar } from './../../molecules/SearchBar'
import { Select } from './../../atoms/Select'
import { Button } from './../../atoms/Button'
import { Icon } from './../../atoms/Icon'
import { Text } from './../../atoms/Text'
import { withShipments } from '../../../hoc/withShipments'

export const ShipmentFiltersComponent = (props) => {
  const [origin, setOrigin] = useState('')
  const [status, setStatus] = useState('')
  const [customerStatus, setCostumerStatus] = useState('')
  const [shipmentId, setShipmentId] = useState('')

  const [filterValues, setFilterValues] = useState(null)

  const handleChange = (event) => {
    setShipmentId(event.target.value)
  }

  useEffect(() => {
    setFilterValues({
      shipmentId,
      origin,
      status,
      customerStatus
    })
  }, [origin, status, customerStatus, shipmentId])

  const filterIsNotEmpty = () => {
    const emptyFilterObject = {
      shipmentId: '',
      origin: '',
      status: '',
      customerStatus: ''
    }
    if (JSON.stringify(filterValues) !== JSON.stringify(emptyFilterObject)) {

    }
  }

  const onFilter = () => {
    if (filterIsNotEmpty) {
      props.filterShipments({ shipments: props.SHIPMENTS.res, filters: filterValues })
    }
  }

  return (
    <ShipmentFilterContainer>
      <ShipmentFilterInputSection>
        <SearchBar placeholder='Search for a Shipment' value={shipmentId} onChange={handleChange} validationPattern='number'/>
      </ShipmentFilterInputSection>
      <ShipmentFilterSelectSection>
        <ShipmentFilterSelectsContainer>
          <Select style={{ minWidth: 82 }} placeholder="Origin" onSelect={setOrigin} selectedValue={origin} options={props.CITIES}/>
          <Select style={{ minWidth: 82 }} placeholder="Status" onSelect={setStatus} selectedValue={status} options={props.STATUS}/>
          <Select style={{ minWidth: 82 }} placeholder="Customer Status" onSelect={setCostumerStatus} selectedValue={customerStatus} options={props.CUSTOMER_STATUS}/>
        </ShipmentFilterSelectsContainer>
        <Button onClick={onFilter}>
          <Icon iconName='ADD_SHIPMENT_ICON' width={25}/>
          <Text>Create Shipment</Text>
        </Button>
      </ShipmentFilterSelectSection>
    </ShipmentFilterContainer>
  )
}

ShipmentFiltersComponent.propTypes = {
  SHIPMENTS: PropTypes.object,
  CITIES: PropTypes.array,
  STATUS: PropTypes.array,
  CUSTOMER_STATUS: PropTypes.array,
  filterShipments: PropTypes.func
}

export const ShipmentFilters = withShipments(ShipmentFiltersComponent)
