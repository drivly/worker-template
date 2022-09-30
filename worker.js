import { json } from 'https://pkg.do/apis.do'

export default {
  fetch: req => json({ hello: req.cf.city }) 
}
