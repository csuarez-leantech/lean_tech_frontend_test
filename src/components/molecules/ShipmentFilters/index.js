import React, { useState } from 'react'
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

export const ShipmentFilters = (props) => {
  const [status, setStatus] = useState('')
  const [carrierStatus, setCarrierStatus] = useState('')
  const [costumerStatus, setCostumerStatus] = useState('')

  return (
    <ShipmentFilterContainer>
      <ShipmentFilterInputSection>
        <SearchBar placeholder='Search for a Shipment'/>
      </ShipmentFilterInputSection>
      <ShipmentFilterSelectSection>
        <ShipmentFilterSelectsContainer>
          <Select placeholder="Status" onSelect={setStatus} value={status}/>
          <Select placeholder="Carrier Status" onSelect={setCarrierStatus} value={carrierStatus}/>
          <Select placeholder="Customer Status" onSelect={setCostumerStatus} value={costumerStatus}/>
        </ShipmentFilterSelectsContainer>
        <Button >
          <Icon iconName='ADD_SHIPMENT_ICON' width={25}/>
          <Text>Create Shipment</Text>
        </Button>
      </ShipmentFilterSelectSection>
    </ShipmentFilterContainer>
  )
}
