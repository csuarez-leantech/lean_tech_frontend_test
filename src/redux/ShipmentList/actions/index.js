import { Constants } from './../constants'

export const setFilters = payload => {
  return {
    type: Constants.SET_FILTERS,
    payload
  }
}

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
