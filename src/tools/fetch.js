const DEFAULT_URL = 'https://jsonmock.lean-tech.io/api'

const defaultHeaders = new Headers()

export const Fetch = async (method, URL, data, extraHeaders) => {
  if ((!defaultHeaders.has('content-type'))) {
    defaultHeaders.append('content-type', 'application/json')
  }
  defaultHeaders.append('access-control-allow-origin', '*')
  defaultHeaders.append('Access-Control-Allow-Methods', '*')

  if (extraHeaders) {
    extraHeaders.forEach((item) => {
      defaultHeaders.append(item.key, item.value)
    })
  }
  const requestInit = {
    method: method,
    headers: new Headers(defaultHeaders)
  }

  if (data) {
    requestInit.body = JSON.stringify(data)
  }

  return await fetch(DEFAULT_URL.concat(URL), requestInit).then(res => { return res.json() })
}
