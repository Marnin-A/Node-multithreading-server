const http =require('http')
const fs= require('fs')
const port =5500

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'})
    fs.readFile('index.html',function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not found')
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error);
    }else{
        console.log('Server listening on port' + port);
    }
})