import { Constants } from './../constants'

const initialState = {
  filters: null,
  shipments: [],
  cities: [],
  status: [],
  customerStatus: [],
  loadingShipments: false,
  loadingFiltering: false,
  citiesLoading: false,
  statusLoading: false,
  customerStatusLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    // SHIPMENTS
    case Constants.FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: true }
    case Constants.SUCCESS_FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    case Constants.FAIL_FETCH_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    // FILTER SHIPMENTS
    case Constants.FILTER_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: true }
    case Constants.SUCCESS_FILTER_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    case Constants.FAIL_FILTER_SHIPMENTS:
      return { ...state, shipments: action.payload, loadingShipments: false }
    // CITIES
    case Constants.GET_CITIES:
      return { ...state, cities: action.payload, citiesLoading: true }
    case Constants.SUCCESS_GET_CITIES:
      return { ...state, cities: action.payload, citiesLoading: false }
    case Constants.FAIL_GET_CITIES:
      return { ...state, cities: action.payload, citiesLoading: false }
    // STATUS
    case Constants.GET_STATUS:
      return { ...state, status: action.payload, statusLoading: true }
    case Constants.SUCCESS_GET_STATUS:
      return { ...state, status: action.payload, statusLoading: false }
    case Constants.FAIL_GET_STATUS:
      return { ...state, status: action.payload, statusLoading: false }
    // COSTUMER STATUS
    case Constants.GET_CUSTOMER_STATUS:
      return { ...state, customerStatus: action.payload, customerStatusLoading: true }
    case Constants.SUCCESS_GET_CUSTOMER_STATUS:
      return { ...state, customerStatus: action.payload, customerStatusLoading: false }
    case Constants.FAIL_GET_CUSTOMER_STATUS:
      return { ...state, customerStatus: action.payload, customerStatusLoading: false }
    // DEFAULT
    default:
      return state
  }
}
