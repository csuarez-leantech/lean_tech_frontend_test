import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchShipmentsService,
  getCitiesService,
  getStatusService,
  getCustomerStatusService,
  filterShipmentsService
} from './../../../services/Shipments'
import { Constants } from './../../../redux/ShipmentList/constants'

function * fetchShipments () {
  try {
    const data = yield call(fetchShipmentsService)
    if (data.status !== 200) {
      return yield put({
        type: Constants.FAIL_FETCH_SHIPMENTS,
        payload: data
      })
    }

    yield put({
      type: Constants.SUCCESS_FETCH_SHIPMENTS,
      payload: data
    })
  } catch (e) {
    console.error('Error: saga', e.message)
    return yield put({
      type: Constants.FAIL_FETCH_SHIPMENTS,
      payload: e.message
    })
  }
}

function * getCities (action) {
  try {
    const data = yield call(getCitiesService, action.payload)
    yield put({
      type: Constants.SUCCESS_GET_CITIES,
      payload: data
    })
  } catch (e) {
    yield put({
      type: Constants.FAIL_GET_CITIES,
      payload: e.message
    })
  }
}

function * getStatus (action) {
  try {
    const data = yield call(getStatusService, action.payload)
    yield put({
      type: Constants.SUCCESS_GET_STATUS,
      payload: data
    })
  } catch (e) {
    yield put({
      type: Constants.FAIL_GET_STATUS,
      payload: e.message
    })
  }
}

function * getCustomerStatus (action) {
  try {
    const data = yield call(getCustomerStatusService, action.payload)
    yield put({
      type: Constants.SUCCESS_GET_CUSTOMER_STATUS,
      payload: data
    })
  } catch (e) {
    yield put({
      type: Constants.FAIL_GET_CUSTOMER_STATUS,
      payload: Element.message
    })
  }
}

function * filterShipments (action) {
  // const data = yield call(filterShipmentsService, action.payload)
  try {
    const data = yield call(filterShipmentsService, action.payload)
    yield put({
      type: Constants.SUCCESS_FILTER_SHIPMENTS,
      payload: data
    })
  } catch (e) {
    yield put({
      type: Constants.SUCCESS_FILTER_SHIPMENTS,
      payload: e.message
    })
  }
}

export function * shipmentsSaga () {
  yield takeLatest(Constants.FETCH_SHIPMENTS, fetchShipments)
  yield takeLatest(Constants.GET_CITIES, getCities)
  yield takeLatest(Constants.GET_STATUS, getStatus)
  yield takeLatest(Constants.GET_CUSTOMER_STATUS, getCustomerStatus)
  yield takeLatest(Constants.FILTER_SHIPMENTS, filterShipments)
}
