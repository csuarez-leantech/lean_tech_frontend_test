import { Constants } from './../constants'

const initialState = {
  filters: null,
  shipments: [],
  loadingShipments: false,
  loadingFiltering: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: true }
    case Constants.SUCCESS_FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    case Constants.FAIL_FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    case Constants.FILTERS_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingFiltering: true }
    case Constants.SUCCESS_FILTERS_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingFiltering: false }
    case Constants.FAIL_FILTERS_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingFiltering: false }
    default:
      return state
  }
}
