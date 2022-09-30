// import { json } from 'https://pkg.do/apis.do'
import { json } from 'http://pkg.do/itty-router-extras'

export default {
  fetch: ({url}) => json({ hello: 'world', url, time: Date.now() })
}
