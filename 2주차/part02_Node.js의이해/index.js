//조성만

//let server = require('./server_url.js')//url방식
let server = require('./server_whatwg.js')//whatwg방식

let router = require('./router.js')
let requestHander = require('./requestHander.js')

server.start(router.route, requestHander.handle)