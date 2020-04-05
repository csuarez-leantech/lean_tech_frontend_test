import React from 'react'
import { ShipmentHeaderContainer } from './styles'
import { ShipmentFilters } from './../../molecules/ShipmentFilters'
import { Text } from './../../atoms/Text'

export const ShipmentHeader = () => {
  return (
    <ShipmentHeaderContainer>
      <Text style={{
        fontWeight: 900,
        fontSize: 25,
        paddingBottom: 45
      }}>
        Shipment List
      </Text>
      <ShipmentFilters/>
    </ShipmentHeaderContainer>
  )
}
