import React from 'react'
import { connect } from 'react-redux'
import {
  fetchShipments,
  getCities,
  getStatus,
  getCustomerStatus,
  filterShipments
} from './../../redux/ShipmentList/actions'

const ShipmentsRedux = (HocComponent) => (props) => {
  return <HocComponent {...props}/>
}

const mapStateToProps = (state) => {
  const shipmentsReducer = state.shipmentsReducer
  return {
    SHIPMENTS: shipmentsReducer.shipments,
    CITIES: shipmentsReducer.cities,
    STATUS: shipmentsReducer.status,
    CUSTOMER_STATUS: shipmentsReducer.customerStatus,
    LOADING_SHIPMENTS: shipmentsReducer.loadingShipments
  }
}
export const withShipments = (Component) => connect(
  mapStateToProps,
  {
    fetchShipments,
    getCities,
    getStatus,
    getCustomerStatus,
    filterShipments
  })(ShipmentsRedux(Component))
