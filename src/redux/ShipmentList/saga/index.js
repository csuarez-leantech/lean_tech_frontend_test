import { call, put, takeLeading } from 'redux-saga/effects'
import { fetchShipments as fetchShipmentsService } from './../../../services/Shipments'
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

export function * shipmentsSaga () {
  yield takeLeading(Constants.FETCH_SHIPMENTS, fetchShipments)
}
