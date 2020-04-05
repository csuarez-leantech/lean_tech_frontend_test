import { Fetch } from './../../tools/fetch'
import { get } from './routes'
import { jsonResponse } from './../../tools/jsonResponse'

export const fetchShipments = async () => {
  return await Fetch('GET', get).then(res => {
    if (!res) {
      return jsonResponse(500, 'Something went wrong')
    }
    return jsonResponse(200, res)
  }).catch(err => {
    return jsonResponse(500, err)
  })
}
