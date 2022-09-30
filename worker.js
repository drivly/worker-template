// import { json } from 'https://pkg.do/apis.do'
import { json } from 'http://pkg.do/itty-router-extras'

export default {
  fetch: req => {
    const { url } = req
    const { hostname, pathname, searchParams } = new URL(url)
    const headers = Object.fromEntries(req.headers)
    json({ url, hostname, pathname, searchParams, headers })
  }
}
