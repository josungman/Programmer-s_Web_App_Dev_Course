//조성만
const fs = require('fs');
const main_view = fs.readFileSync('./main.html','utf-8')
const orderlist_view = fs.readFileSync('./orderlist.html','utf-8')

//DB불러오기
const mariadb  = require('./database/connect/mariadb')

function main(response) {
    console.log('main')
    
    mariadb.query("SELECT * FROM product",function(err,rows) {
        console.log(rows);
    })

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(main_view);
    response.end();
}

function redRacket(response){
    fs.readFile('./img/redRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'} )
        response.write(data);
        response.end();
        
    })
}

function blueRacket(response){
    fs.readFile('./img/blueRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'} )
        response.write(data);
        response.end();
        
    })
}

function blackRacket(response){
    fs.readFile('./img/blackRacket.png',function(err,data){
        response.writeHead(200,{'Content-Type' : 'text/html'} )
        response.write(data);
        response.end();
        
    })
}


function login(response) {
    console.log('login')

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

function order(response,productId){
    response.writeHead(200,{'Content-Type' : 'text/html'} )

    mariadb.query("INSERT INTO orderlist VALUES (" + productId +",'" +  new Date().toLocaleDateString() + "');",function(err,rows) {
            if (err) {
                console.error("Database error: ", err);
                response.end("Database error.");
                return;
            } else{
                console.log(rows);  
            }
    
            orderlist(response)
    })

    
}

function orderlist(response){
    
        //해더값 있는지 확인.
        if (!response.headersSent) {
            response.writeHead(200, {'Content-Type': 'text/html'});
        }
            
        mariadb.query("select * from orderlist",function(err,rows){

            response.write(orderlist_view);

            rows.forEach(element => {
                response.write("<tr>"
                        +"<td>" + element.product_id + "</td>"
                        +"<td>" + element.order_date + "</td>"
                        +"</tr>"
                 );   
            });

            //console.log(err)
            response.write("</table>")
            response.end();

        })
        


}

let handle = {}; // key:value
handle['/'] = main;
//handle['/login'] = login;
handle['/order'] = order;
handle['/orderlist'] = orderlist;

/* image directory */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;