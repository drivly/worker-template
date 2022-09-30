// import { json } from 'https://pkg.do/apis.do'
import { json } from 'http://pkg.do/itty-router-extras'

export default {
  fetch: req => {
    const { url } = req
    const { hostname, pathname, searchParams } = new URL(url)
    const [ tld, sld, subdomain ] hostname.split('.').reverse()
    const headers = Object.fromEntries(req.headers)
    json({ url, hostname, tld, sld, subdomain, pathname, searchParams, headers })
  }
}
