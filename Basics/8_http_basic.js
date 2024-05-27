const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome!")
        res.end()
    }
    else if(req.url==='/about'){
        res.write("This is about page")
        res.end()
    }
    else{
        res.write("Hi, sorry we cant find the page that ur looking for!")
        res.end()
    }
})

server.listen(5000)