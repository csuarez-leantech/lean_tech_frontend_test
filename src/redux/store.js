import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

// Reducers
import shipmentsReducer from './ShipmentList/reducers'

// Saga
import { shipmentsSaga } from './ShipmentList/saga'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Combine reducers
const reducers = combineReducers({
  shipmentsReducer
})

// Create store
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

// Running the saga
sagaMiddleware.run(shipmentsSaga)

export default store
