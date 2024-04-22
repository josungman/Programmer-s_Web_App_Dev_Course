//조성만
let http = require('http');
let url = require('url');

function start(route,handle) {
    function onRequest(request,response){
        let pathname = url.parse(request.url).pathname;

        // /favicon.ico 요청을 무시하거나 적절히 처리
        if (pathname === '/favicon.ico') {
            return;
        }
            
        route(pathname,handle,response)

    }
    
    http.createServer(onRequest).listen(8888);
    // localhost:8888
}

//내장 함수 외부에서 사용할 수 있도록하기
exports.start = start;