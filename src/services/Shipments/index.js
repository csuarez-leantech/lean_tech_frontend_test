import { Fetch } from './../../tools/fetch'
import { get } from './routes'
import { jsonResponse } from './../../tools/jsonResponse'
import { getCites } from './../../tools/dataParser'

export const fetchShipmentsService = async () => {
  return await Fetch('GET', get).then(res => {
    if (!res) {
      return jsonResponse(500, 'Something went wrong')
    }
    return jsonResponse(200, res)
  }).catch(err => {
    return jsonResponse(500, err)
  })
}

export const getCitiesService = async (payload) => {
  // Get all origins
  const originCities = payload.map((option) => {
    return option.origin
  })

  // get all destinations
  const destinationCities = payload.map((option) => {
    return option.destination
  })

  // Concat origin and destination
  const filteredArray = originCities.concat(destinationCities)

  // Get unique array of cities
  const uniqueCities = Array.from(
    new Set(
      filteredArray.map(item =>
        item.state
      )
    )
  ).map(state => {
    return {
      city: filteredArray.find(item => item.state === state).city,
      state: state
    }
  })

  return getCites(uniqueCities)
}

export const getStatusService = async (payload) => {
  // Gets all the status
  const statusArray = payload.map(option => option.trackingDetails[0].status)
  // Gets the status array without repetitions
  const unique = [...new Set(statusArray)]

  return unique
}

export const getCustomerStatusService = async (payload) => {
  // Gets all the custumers status
  const costumerStatusArray = payload.map(option => option.customerStatus)
  // Gets the customumer status array without repetitions
  const unique = [...new Set(costumerStatusArray)]

  return unique
}

export const filterShipmentsService = async (payload) => {
  const shipments = payload.shipments
  const filters = payload.filters
  const filteredShipments = shipments.filter(shipment => {
    const origin = shipment.origin.city.concat(', ').concat(shipment.origin.state)
    const status = shipment.trackingDetails[0].status
    const customerStatus = shipment.customerStatus
    const shipmentId = String(shipment.shipmentId)
    return origin.includes(filters.origin) && status.includes(filters.status) &&
      customerStatus.includes(filters.customerStatus) && shipmentId.includes(filters.shipmentId)
  })
  return jsonResponse(200, filteredShipments)
}
