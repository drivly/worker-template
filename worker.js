// import { json } from 'https://pkg.do/apis.do'

export default {
  fetch: req => new Response(JSON.stringify({ hello: req.cf.city }, null, 2)) 
}
