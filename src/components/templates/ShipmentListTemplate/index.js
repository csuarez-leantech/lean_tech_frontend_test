import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ShipmentTemplateContainer } from './styles'
import { ShipmentHeader } from './../../organism/ShipmentHeader'
import { withShipments } from './../../../hoc/withShipments'

export const ShipmentListTemplateComponent = (props) => {
  useEffect(() => {
    props.fetchShipments()
    // eslint-disable-next-line
  }, [])

  return (
    <ShipmentTemplateContainer>
      <ShipmentHeader />
      <div>List of shipments</div>
    </ShipmentTemplateContainer>
  )
}

ShipmentListTemplateComponent.propTypes = {
  fetchShipments: PropTypes.func
}

export const ShipmentListTemplate = withShipments(ShipmentListTemplateComponent)
