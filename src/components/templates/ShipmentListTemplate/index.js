import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ShipmentTemplateContainer } from './styles'
import { ShipmentHeader } from './../../organism/ShipmentHeader'
import { withShipments } from './../../../hoc/withShipments'
import { Conditional } from './../../atoms/Conditional'
import { Loading } from './../../molecules/Loading'

export const ShipmentListTemplateComponent = (props) => {
  const [shipments, setShipments] = useState([])
  useEffect(() => {
    props.fetchShipments()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (props.SHIPMENTS && props.SHIPMENTS.res) {
      setShipments(props.SHIPMENTS.res)
      props.getCities(props.SHIPMENTS.res)
      props.getStatus(props.SHIPMENTS.res)
      props.getCustomerStatus(props.SHIPMENTS.res)
    }
    // eslint-disable-next-line
  }, [props.SHIPMENTS])

  return (
    <ShipmentTemplateContainer>
      <ShipmentHeader />
      <Conditional condition={props.LOADING_SHIPMENTS}>
        <Loading />
      </Conditional>
      <Conditional condition={!props.LOADING_SHIPMENTS}>
        <div>
          {shipments.map((item, i) => {
            return <div key={i}>
              ShipmentId: {item.shipmentId} --- Company name: {item.companyName} --- Origin: {item.origin.city.concat(', ').concat(item.origin.state)} ---
              Status: {item.trackingDetails[0].status} --- Customer Status: {item.customerStatus}
            </div>
          })}
        </div>
      </Conditional>

    </ShipmentTemplateContainer>
  )
}

ShipmentListTemplateComponent.propTypes = {
  SHIPMENTS: PropTypes.any,
  LOADING_SHIPMENTS: PropTypes.bool,
  fetchShipments: PropTypes.func,
  getCities: PropTypes.func,
  getStatus: PropTypes.func,
  getCustomerStatus: PropTypes.func
}

export const ShipmentListTemplate = withShipments(ShipmentListTemplateComponent)
