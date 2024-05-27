const {readFile,writeFile}=require("fs")

readFile("./content/first.txt",(error1,file1)=>{
    if(error1){
        console.log(error1)
        return
    }
    console.log(file1)
    readFile('./content/second.txt',(error2,file2)=>{
        if(error2){
            console.log(error2)
            return
        }
        console.log(file2)
        writeFile('./content/result_async.txt',
        `Hello, the first file content is ${file1} and 
        the second file content is ${file2}`,
        (error3,file3)=>{
            if(error3){
                console.log(error3)
                return
            }
            console.log(file3)   
        })
    })
})