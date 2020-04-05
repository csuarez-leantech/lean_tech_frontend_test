import React from 'react'
import { connect } from 'react-redux'
import { fetchShipments } from './../../redux/ShipmentList/actions'

const ShipmentsRedux = (HocComponent) => (props) => {
  return <HocComponent {...props}/>
}

const mapStateToProps = (state) => {
  const shipmentsReducer = state.shipmentsReducer
  return {
    SHIPMENTS: shipmentsReducer.shipments
  }
}
export const withShipments = (Component) => connect(
  mapStateToProps,
  {
    fetchShipments
  })(ShipmentsRedux(Component))
