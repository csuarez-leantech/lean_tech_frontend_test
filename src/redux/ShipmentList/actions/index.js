import { Constants } from './../constants'

export const fetchShipments = payload => {
  return {
    type: Constants.FETCH_SHIPMENTS,
    payload
  }
}

export const filterShipments = payload => {
  return {
    type: Constants.FILTER_SHIPMENTS,
    payload
  }
}

export const getCities = payload => {
  return {
    type: Constants.GET_CITIES,
    payload
  }
}

export const getStatus = payload => {
  return {
    type: Constants.GET_STATUS,
    payload
  }
}

export const getCustomerStatus = payload => {
  return {
    type: Constants.GET_CUSTOMER_STATUS,
    payload
  }
}
