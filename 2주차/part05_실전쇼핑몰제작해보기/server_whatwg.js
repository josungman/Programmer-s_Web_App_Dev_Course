//조성만
let http = require('http');
const { URL } = require('url'); // WHATWG URL API 사용

function start(route,handle) {
    function onRequest(request,response){
        
        const reqUrl = new URL(request.url, `http://${request.headers.host}`);
        let pathname = reqUrl.pathname;
        let queryData = reqUrl.searchParams

        // /favicon.ico 요청을 무시하거나 적절히 처리
        if (pathname === '/favicon.ico') {
            return;
        }
            
        route(pathname,handle,response,queryData.get('productId'))

    }
    
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

//내장 함수 외부에서 사용할 수 있도록하기
exports.start = start;